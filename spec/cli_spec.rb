require 'rspec'
require_relative '../lib/test_rail_integration/cli'
require_relative '../lib/test_rail_integration/generator/connection'


describe CLI do

  before(:all) do
    @subject = CLI.new
  end

  context 'when executing perform cli command' do

    before(:all) do
      @subject.perform
    end

    it 'test_rail_data.yml should be copied' do
      expect(File.exist?('config/data/test_rail_data.yml')).to eq(true)
    end

    it 'copied test_rail_data.yml should be identical' do
      expect(File.exist?('config/data/test_rail_data.yml')).to eq(true)
      expect(File.read('config/data/test_rail_data.yml')).to eq(File.read('lib/test_rail_integration/generator/project/test_rail_data.yml'))
    end

  end

  context 'when executing check_test_run_and_update cli command ' do

    context 'and not passing test_run_id param' do

      it 'should see output message' do
        result = capture(:stdout) { @subject.check_test_run_and_update }
        expect(result).to eq("You must set correct test run id through --test_run_id\n")
      end

      it 'should not not call check_test_run_statuses method' do
        expect(TestRail::Check).not_to receive(:check_test_run_statuses)
        @subject.check_test_run_and_update
      end

    end

    context 'and passing test run id parameter ' do

      before(:all) do
        @subject.options = {:test_run_id => 12345}
      end

      after(:all) do
        @subject.options.clear
      end

      it 'should execute command once' do
        expect(TestRail::Check).to receive(:check_test_run_statuses)
        @subject.check_test_run_and_update
      end

      it 'should not see any output ' do
        allow(TestRail::Check).to receive(:check_test_run_statuses).and_return([])
        result = capture(:stdout) { @subject.check_test_run_and_update }
        expect(result).to eq('')
      end

    end

  end

  context 'when executing create_test_run command' do

    context 'and not passing test_run_name parameter' do

      it 'should see output message' do
        result = capture(:stdout) { @subject.create_test_run }
        expect(result).to eq("You must set correct test run name through --test_run_name\n")
      end

      it 'should not not call check_test_run_statuses method' do
        expect(TestRail::Connection).not_to receive(:create_test_run_with_name)
        @subject.create_test_run
      end

    end

    context 'and passing test_run_name parameter' do

      before(:all) do
        @subject.options = {:test_run_name => 'test run name'}
      end

      before(:each) do
        allow(TestRail::Connection).to receive(:create_test_run_with_name).and_return(
                                           {"id" => "561"})
      end

      it 'should execute command once' do
        expect(TestRail::Connection).to receive(:create_test_run_with_name)
        @subject.create_test_run
      end

      it 'should see created test run id in output' do
        result = capture(:stdout) { @subject.create_test_run }
        expect(result).to eq("You successfully created test run with id 561\n")
      end

    end

    context 'and passing empty test_run_name parameter' do

      before(:all) do
        @subject.options = {:test_run_name => ''}
      end

      it 'should not execute command once' do
        expect(TestRail::Connection).not_to receive(:create_test_run_with_name)
        @subject.create_test_run
      end

      it 'should see a output' do
        result = capture(:stdout) { @subject.create_test_run }
        expect(result).to eq("Test_run_name parameter should not be empty\n")
      end
    end

  end

  context 'when executing shoot cli command' do

    before(:each) do
      allow(TestRail::Connection).to receive(:test_run_data).and_return(
                                         {"name" => "AT id staging new"})
      allow(TestRail::Connection).to receive(:cases_id).and_return(["11", "22", "33"])
      allow(TestRail::TestRailTools).to receive(:exec).and_return("Ok")
    end

    context 'and not passing test run id param' do

      it 'should not execute command once' do
        expect(TestRail::TestRailTools).not_to receive(:exec)
        @subject.shoot
      end

      it 'should see output ' do
        result = capture(:stdout) { @subject.shoot }
        expect(result).to eq("You must set correct test run id through --test_run_id\n")
      end

    end

    context 'and passing test_run_id param' do

      before(:each) do
        @subject.options = {:test_run_id => 777}
      end

      after(:all) do
        @subject.options.clear
      end

      it 'should call execution command' do
        expect(TestRail::TestRailTools).to receive(:exec)
        @subject.shoot
      end

      it 'should execute correct command' do
        result = capture(:stdout) { @subject.shoot }
        expect(result).to eq("\"Gem will execute command: cucumber -p lazada.id.staging TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
      end

        context 'and passing venture param' do

          before(:each) do
            @subject.options[:venture] = 'vn'
          end

          after(:each) do
            @subject.options.delete("venture")
          end

          it 'should execute correct command' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("\"Gem will execute command: cucumber -p lazada.vn.staging TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
          end

          it 'should call execution command' do
            expect(TestRail::TestRailTools).to receive(:exec)
            @subject.shoot
          end

        end

        context 'and passing env param' do

          before(:each) do
            @subject.options[:env] = 'live_test'
          end

          after(:all) do
            @subject.options.delete("env")
          end

          it 'should execute correct command' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("\"Gem will execute command: cucumber -p lazada.id.live_test TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
          end

          it 'should call execution command' do
            expect(TestRail::TestRailTools).to receive(:exec)
            @subject.shoot
          end

        end

        context 'and passing showroom env param' do

          before(:each) do
            @subject.options[:env] = "showroom"
          end

          after(:all) do
            @subject.options.delete("showroom")
          end

          context 'and not passing SR param' do

            it 'should execute correct command' do
              result = capture(:stdout) { @subject.shoot }
              expect(result).to eq("\"Gem will execute command: cucumber -p lazada.id.showroom TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
            end

            it 'should call execution command' do
              expect(TestRail::TestRailTools).to receive(:exec)
              @subject.shoot
            end

          end

          context 'and passing SR param' do

            before(:each) do
              @subject.options[:showroom] = '111'
            end

            after(:each) do
              @subject.options.delete("showroom")
            end

            it 'should call execution command' do
              expect(TestRail::TestRailTools).to receive(:exec)
              @subject.shoot
            end

            it 'should execute correct command' do
              result = capture(:stdout) { @subject.shoot }
              expect(result).to eq("\"Gem will execute command: cucumber -p lazada.id.showroom SR='111' TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
            end

          end
        end

      context 'and passing new command' do

        before do
          @subject.options[:command] = 'Command'
        end

        after do
          @subject.options.delete("Command")
        end

        it 'should execute changed command' do
          result = capture(:stdout) { @subject.shoot }
          expect(result).to eq("\"Gem will execute command: Command @C11,@C22,@C33\"\n")
        end
      end

      context 'and not receiving test run with required name' do

        before(:each) do
          allow(TestRail::Connection).to receive(:test_run_data).and_return(
                                             {"name" => "Simple test run name"})
        end

        context 'and not passing venture param' do

          before(:each) do
            @subject.options[:env] = 'live_test'
          end

          after(:each) do
            @subject.options.delete("env")
          end

          it 'should not call execution command' do
            expect(TestRail::TestRailTools).not_to receive(:exec)
            @subject.shoot
          end

          it 'should see output ' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("You must set correct venture param through --venture in order to execute command\n")
          end

        end

        context 'and not passing env param' do

          before(:each) do
            @subject.options[:venture] = 'id'
          end

          after(:each) do
            @subject.options.delete("venture")
          end

          it 'should not call execution command' do
            expect(TestRail::TestRailTools).not_to receive(:exec)
            @subject.shoot
          end

          it 'should see output ' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("You must set correct env param through --env in order to execute command\n")
          end

        end

        context 'and not passing venture, env params' do

          it 'should not call execution command' do
            expect(TestRail::TestRailTools).not_to receive(:exec)
            @subject.shoot
          end

          it 'should see output ' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("You must set correct env, venture params through --env, --venture in order to execute command\n")
          end

        end

        context 'and passing all required params' do

          before(:each) do
            @subject.options[:venture] = 'id'
            @subject.options[:env] = 'live'
          end

          after(:each) do
            @subject.options.delete("venture")
            @subject.options.delete("env")
          end

          it 'should call execution command' do
            expect(TestRail::TestRailTools).to receive(:exec)
            @subject.shoot
          end

          it 'should execute correct command' do
            result = capture(:stdout) { @subject.shoot }
            expect(result).to eq("\"Gem will execute command: cucumber -p lazada.id.live TESTRAIL=1 --color -f json -o cucumber.json -t @C11,@C22,@C33\"\n")
          end
        end
      end
    end
  end
end