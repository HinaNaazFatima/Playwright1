Feature: Ecommerce validations

  Scenario: Placing the order
    Given a login to Ecommerce app with "hina.nazfatima@gmail.com" and  "@Aisha1983"
    When Add "ZARA COAT 3" to cart
    Then Verify is displayed in the cart
    When Enter valid details and place the order
    Then Verify order is present in order history
