Feature: Compress PDF

  Background:
    Given I have a new browser context
      And I sign in as a type1 user

  @regression @unity @compress-pdf @signed-in-type1
  Scenario: Type1 user upload of single file
    Given I go to the compress-pdf page
     Then I wait for 5 seconds
     When I choose the file "test-files/test.pdf" to upload
     Then I wait for 5 seconds
     Then I should see the address bar contains "acrobat.adobe.com"
     Then I wait for 5 seconds
     When I go to the compress-pdf page
     Then I wait for 5 seconds     
     Then I choose the file "test-files/test.pdf" to upload
     Then I wait for 5 seconds
     Then I should see the address bar contains "acrobat.adobe.com"
     Then I wait for 5 seconds
     Then I go to the compress-pdf page
     Then I wait for 5 seconds     
     Then I choose the file "test-files/test.pdf" to upload
     Then I wait for 5 seconds
     Then I should see the address bar contains "acrobat.adobe.com"     

  @regression @unity @compress-pdf @multi-files-type1
  Scenario: Type1 user upload of multiple files
    Given I go to the compress-pdf page
     When I choose the file "test-files/test.pdf,test-files/test2.pdf" to upload
     Then I wait for 5 seconds
     Then I should see the address bar contains "acrobat.adobe.com"
     Then I should see "To compress this many files at once, you need to select your files again in Acrobat.adobe.com" in the widget error toast 
