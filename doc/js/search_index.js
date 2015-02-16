var search_data = {"index":{"searchIndex":["testrail","apiclient","apierror","connection","hook","testcaseresult","testraildataload","testrailtools","testrunparameters","testrailintegration","cli","testtail","generators","project","cases_id()","change_test_run_name()","client()","commit_test_result()","copy_file()","failed_result?()","generate_cucumber_execution_file()","get_previous_test_result()","get_test_result()","new()","new()","new()","passed_result?()","perform()","prepare_config()","send_get()","send_post()","source_root()","test_rail_data()","test_rail_data_file_exist?()","test_run_data()","test_run_id()","test_run_id=()","test_run_name()","to_test_rail_api()","unchanged_pass_result?()","update_test_rail()","write_test_run_id()","gemfile","gemfile.lock","license","readme","rakefile","test_rail_integration.gemspec"],"longSearchIndex":["testrail","testrail::apiclient","testrail::apierror","testrail::connection","testrail::hook","testrail::testcaseresult","testrail::testraildataload","testrail::testrailtools","testrail::testrunparameters","testrailintegration","testrailintegration::cli","testrailintegration::testtail","testrailintegration::testtail::generators","testrailintegration::testtail::generators::project","testrail::connection::cases_id()","testrail::connection::change_test_run_name()","testrail::connection::client()","testrail::connection::commit_test_result()","testrailintegration::testtail::generators::project::copy_file()","testrail::hook::failed_result?()","testrail::testrailtools::generate_cucumber_execution_file()","testrail::connection::get_previous_test_result()","testrail::connection::get_test_result()","testrail::apiclient::new()","testrail::testcaseresult::new()","testrail::testrunparameters::new()","testrail::hook::passed_result?()","testrailintegration::cli#perform()","testrail::testrailtools::prepare_config()","testrail::apiclient#send_get()","testrail::apiclient#send_post()","testrailintegration::testtail::generators::project::source_root()","testrail::testraildataload::test_rail_data()","testrailintegration::testtail::generators::project::test_rail_data_file_exist?()","testrail::connection::test_run_data()","testrail::connection::test_run_id()","testrail::connection::test_run_id=()","testrail::connection::test_run_name()","testrail::testcaseresult#to_test_rail_api()","testrail::hook::unchanged_pass_result?()","testrail::hook::update_test_rail()","testrail::testrailtools::write_test_run_id()","","","","","",""],"info":[["TestRail","","TestRail.html","",""],["TestRail::APIClient","","TestRail/APIClient.html","",""],["TestRail::APIError","","TestRail/APIError.html","",""],["TestRail::Connection","","TestRail/Connection.html","",""],["TestRail::Hook","","TestRail/Hook.html","",""],["TestRail::TestCaseResult","","TestRail/TestCaseResult.html","",""],["TestRail::TestRailDataLoad","","TestRail/TestRailDataLoad.html","",""],["TestRail::TestRailTools","","TestRail/TestRailTools.html","",""],["TestRail::TestRunParameters","","TestRail/TestRunParameters.html","",""],["TestRailIntegration","","TestRailIntegration.html","",""],["TestRailIntegration::CLI","","TestRailIntegration/CLI.html","",""],["TestRailIntegration::TestTail","","TestRailIntegration/TestTail.html","",""],["TestRailIntegration::TestTail::Generators","","TestRailIntegration/TestTail/Generators.html","",""],["TestRailIntegration::TestTail::Generators::Project","","TestRailIntegration/TestTail/Generators/Project.html","",""],["cases_id","TestRail::Connection","TestRail/Connection.html#method-c-cases_id","(test_run_id)","<p>Get ID of all test cases from current test run\n<p>cases = client.send_get(“get_tests/12”)\n"],["change_test_run_name","TestRail::Connection","TestRail/Connection.html#method-c-change_test_run_name","()","<p>Changing name of test run from &lt;test run name&gt; in progress to\n&lt;test run name&gt;\n<p>VN LIVE_TEST …\n"],["client","TestRail::Connection","TestRail/Connection.html#method-c-client","()","<p>Creates connection to TestRail server\n<p>client = TestRail::APIClient.new(&#39;&lt;TestRail\nserver&gt;&#39;,“&lt;User …\n"],["commit_test_result","TestRail::Connection","TestRail/Connection.html#method-c-commit_test_result","(test_case_result)","<p>Send test result to TestRail for current test run\nclient.send_post(“add_result_for_case/&lt;number_of …\n"],["copy_file","TestRailIntegration::TestTail::Generators::Project","TestRailIntegration/TestTail/Generators/Project.html#method-c-copy_file","(file_name, root = nil)","<p>Copying templates for using for accessing to testrail\n"],["failed_result?","TestRail::Hook","TestRail/Hook.html#method-c-failed_result-3F","(result)",""],["generate_cucumber_execution_file","TestRail::TestRailTools","TestRail/TestRailTools.html#method-c-generate_cucumber_execution_file","(id_of_run)","<p>Method generates executable cucumber file\n<p>generate_cucumber_execution_file(2)\n<p>cucumber -p lazada.vn.live_test …\n"],["get_previous_test_result","TestRail::Connection","TestRail/Connection.html#method-c-get_previous_test_result","(case_id)","<p>Parse results and returns Failed if this test was marked as failed.\n"],["get_test_result","TestRail::Connection","TestRail/Connection.html#method-c-get_test_result","(case_id)","<p>Obtaining of all previous test results for current test case\n<p>client.send_get(“get_results_for_case/12/3534”) …\n"],["new","TestRail::APIClient","TestRail/APIClient.html#method-c-new","(connection_data)",""],["new","TestRail::TestCaseResult","TestRail/TestCaseResult.html#method-c-new","(test_case_id, title)",""],["new","TestRail::TestRunParameters","TestRail/TestRunParameters.html#method-c-new","()","<p>Checking of correct naming of created test run and return parameters for\nrunnng test run\n"],["passed_result?","TestRail::Hook","TestRail/Hook.html#method-c-passed_result-3F","(result, prev_result)",""],["perform","TestRailIntegration::CLI","TestRailIntegration/CLI.html#method-i-perform","()",""],["prepare_config","TestRail::TestRailTools","TestRail/TestRailTools.html#method-c-prepare_config","(run_id)","<p>Preparation for create right cucumber executable file\n"],["send_get","TestRail::APIClient","TestRail/APIClient.html#method-i-send_get","(uri)","<p>Send Get\n<p>Issues a GET request (read) against the API and returns the result (as Ruby\nhash).\n<p>Arguments: …\n"],["send_post","TestRail::APIClient","TestRail/APIClient.html#method-i-send_post","(uri, data)","<p>Send POST\n<p>Issues a POST request (write) against the API and returns the result (as\nRuby hash).\n<p>Arguments: …\n"],["source_root","TestRailIntegration::TestTail::Generators::Project","TestRailIntegration/TestTail/Generators/Project.html#method-c-source_root","()","<p>Obtaining path of project folder\n"],["test_rail_data","TestRail::TestRailDataLoad","TestRail/TestRailDataLoad.html#method-c-test_rail_data","()","<p>Loading of test rail information\n"],["test_rail_data_file_exist?","TestRailIntegration::TestTail::Generators::Project","TestRailIntegration/TestTail/Generators/Project.html#method-c-test_rail_data_file_exist-3F","()","<p>Checking existence of tes trail data file\n"],["test_run_data","TestRail::Connection","TestRail/Connection.html#method-c-test_run_data","()","<p>Getting information about test run\n"],["test_run_id","TestRail::Connection","TestRail/Connection.html#method-c-test_run_id","()","<p>Getting test run id value\n"],["test_run_id=","TestRail::Connection","TestRail/Connection.html#method-c-test_run_id-3D","(test_run_id)","<p>Setting up test run id\n"],["test_run_name","TestRail::Connection","TestRail/Connection.html#method-c-test_run_name","()","<p>Get test run name\n"],["to_test_rail_api","TestRail::TestCaseResult","TestRail/TestCaseResult.html#method-i-to_test_rail_api","()","<p>Send status to TestRail\n<p>{status_id: 1, comment: “Test passed”}\n"],["unchanged_pass_result?","TestRail::Hook","TestRail/Hook.html#method-c-unchanged_pass_result-3F","(result, prev_result)",""],["update_test_rail","TestRail::Hook","TestRail/Hook.html#method-c-update_test_rail","(scenario)",""],["write_test_run_id","TestRail::TestRailTools","TestRail/TestRailTools.html#method-c-write_test_run_id","(test_run_id)","<p>Writing test run ID into test rail data file\n"],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>gem &#39;thor&#39; gem &#39;fileutils&#39;\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  fileutils (0.7)\n    rmagick (&gt;= 2.13.1)\n  rmagick (2.13.4) ...</pre>\n"],["LICENSE","","LICENSE_txt.html","","<p>MIT License\n<p>Permission is hereby granted, free of charge, to any person obtaining a\ncopy of this software …\n"],["README","","README_md.html","","<p>TestRailIntegration\n<p>This game made for interaction between TestRail and Ruby automation\nframework Cucumber+Watir …\n"],["Rakefile","","Rakefile.html","","<p>require “bundler/gem_tasks”\n"],["test_rail_integration.gemspec","","test_rail_integration_gemspec.html","","<p>lib = File.expand_path(&#39;../lib&#39;, __FILE__) $LOAD_PATH.unshift(lib)\nunless $LOAD_PATH.include?(lib) …\n"]]}}