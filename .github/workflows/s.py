from selenium import webdriver  

driver = webdriver.Chrome()  
driver.get("https://www.example.com")  

# Find element by class name  
element = driver.find_element_by_class_name("example-class")  

# Find element by CSS selector  
element = driver.find_element_by_css_selector("#example-id")  

# Find element by ID  
element = driver.find_element_by_id("example-id")  

# Find element by name  
element = driver.find_element_by_name("example-name")  

# Find element by link text  
element = driver.find_element_by_link_text("example-link-text")  

# Find element by partial link text  
element = driver.find_element_by_partial_link_text("example-partial-link-text")  

# Find element by tag name  
element = driver.find_element_by_tag_name("example-tag-name")  

# Find element by XPath expression  
element = driver.find_element_by_xpath("//example-xpath-expression")  