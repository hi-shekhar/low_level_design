// 1. User Validator
class UserValidator {
    validate(userData: any): void {
        if (!userData.email || !userData.password) {
          throw new Error("Email and password are required.");
        }
        if (!userData.email.includes('@')) {
            throw new Error("Invalid Email");
        }
    }
}

// 2. User Repository (Data Access)
interface UserRepository {
    save(userData: any): void;
}

class DatabaseUserRepository implements UserRepository {
    save(userData: any): void {
      // ... database logic ...
      console.log(`User ${userData.email} saved to database.`);
    }
}

class MockUserRepository implements UserRepository {
    save(userData: any): void {
        console.log(`User ${userData.email} saved to mock storage.`);
    }
}

// 3. Email Service
class EmailService {
  sendWelcomeEmail(email: string): void {
    // ... email sending logic ...
    console.log(`Welcome email sent to ${email}.`);
  }
}

// 4. User Creator (Or User Service) - Orchestrates the process
class UserCreator {
  private validator: UserValidator;
  private repository: UserRepository;
  private emailService: EmailService;

  constructor(validator: UserValidator, repository: UserRepository, emailService: EmailService) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }

  createUser(userData: any): void {
    this.validator.validate(userData);
    this.repository.save(userData);
    this.emailService.sendWelcomeEmail(userData.email);
  }
}

// Usage
const validator = new UserValidator();
const databaseRepository = new DatabaseUserRepository();
const mockRepository = new MockUserRepository();
const emailService = new EmailService();

const userCreatorWithDatabase = new UserCreator(validator, databaseRepository, emailService);
userCreatorWithDatabase.createUser({ email: 'test@example.com', password: 'password' });

const userCreatorWithMock = new UserCreator(validator, mockRepository, emailService);
userCreatorWithMock.createUser({ email: 'test2@example.com', password: 'password' });