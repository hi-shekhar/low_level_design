class UserManager {
    createUser(userData: any): void {
      // 1. Validate user data
      if (!userData.email || !userData.password) {
        throw new Error("Email and password are required.");
      }
      // Basic email validation (very simplified)
      if (!userData.email.includes('@')) {
          throw new Error("Invalid Email");
      }
  
      // 2. Save user to database (using a hypothetical database connection)
      // ... database logic ...
      console.log(`User ${userData.email} created.`);
  
      // 3. Send welcome email
      this.sendWelcomeEmail(userData.email);
    }
  
    private sendWelcomeEmail(email: string): void {
      // ... email sending logic ...
      console.log(`Welcome email sent to ${email}.`);
    }
  }
  
  const userManager = new UserManager();
  userManager.createUser({ email: 'test@example.com', password: 'password' });
  userManager.createUser({ email: 'testexample.com', password: 'password' });