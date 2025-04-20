import '@cypress/xpath';
class LoginPage {
    elements = {
      txtUsername: () => cy.get('input[id="user-name"]'),
      txtPassword: () => cy.get('input[id="password"]'),
      btnLogin: ()=>cy.get('input[id="login-button"]'),
      burgerMenu:()=>cy.get('[id="react-burger-menu-btn"]'),
      btnLogout:()=>cy.get('[id="logout_sidebar_link"]')
      
    };
  
    visit():void {
      cy.visit('/');
    }
  
    inputUsername(username: string):void {
      this.elements.txtUsername().type(username);
    }
  
    inputPassword(password: string):void {
      this.elements.txtPassword().type(password);
    }
  
    clickLoginButton():void {
      this.elements.btnLogin().click();
    }
   

    doLogin(username: string, password: string):void {
      this.visit();
      this.inputUsername(username);
      this.inputPassword(password);
      this.clickLoginButton();
    }

    doLogOut():void{
      this.elements.burgerMenu().click();
      this.elements.btnLogout().click();

    }

  }
  
  export default new LoginPage();