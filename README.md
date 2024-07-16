# Nexca

![Screenshot from 2024-07-16 20-45-05](https://github.com/user-attachments/assets/b5f58f29-ef27-4c52-ba59-628eb4fd62e3)

Nexca is a project that provides admin panel for personal project , blogs and small e-commerces. This guide will help you get started with setting up the admin for you project.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js version 18.17.0 or above

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/homayunmmdy/nexca.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd nexca
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Configuration

1. **Copy the sample environment file and rename it:**
   ```bash
   cp .env.sample .env.local
   ```

2. **Create your own `.env` file and customize the configuration as needed:**
   - Open the `.env.local` file and edit the values according to your setup.
   - Ensure all necessary environment variables are configured.

### Running the Project

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the admin panel:**
   - Open your browser and go to `http://localhost:3000` (or the port number specified in your `.env` file).
   - Enjoy the admin panel.

### Additional Information
- For detailed usage and documentation, refer to the [project documentation or wiki](https://github.com/homayunmmdy/nexca/wiki).
- If you encounter any issues, feel free to open an issue on the [GitHub Issues page](https://github.com/homayunmmdy/nexca/issues).

## Contributing
If you want to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
