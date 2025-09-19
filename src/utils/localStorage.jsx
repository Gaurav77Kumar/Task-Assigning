
localStorage.clear()


const employees = [
  {
    "id": 1,
    "firstName": "Gaurav",
    "email": "gaurav@1.com",
    "password": "123",
    "taskCounts": {
      "active": 5,
      "newTask": 2,
      "completed": 8,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Prepare Report",
        "description": "Prepare the weekly sales report",
        "date": "2025-09-03",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Attend meeting with ABC Corp",
        "date": "2025-09-04",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Data Entry",
        "description": "Update CRM database",
        "date": "2025-09-05",
        "category": "Admin",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya.mehta@example.com",
    "password": "123",
    "taskCounts": {
      "active": 5,
      "newTask": 2,
      "completed": 8,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Design Review",
        "description": "Review UI design for mobile app",
        "date": "2025-09-03",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fix",
        "description": "Fix login authentication issue",
        "date": "2025-09-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Documentation",
        "description": "Update project documentation",
        "date": "2025-09-06",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "rohan.verma@example.com",
    "password": "123",
    "taskCounts": {
      "active": 15,
      "newTask": 2,
      "completed": 8,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Server Maintenance",
        "description": "Run updates on production server",
        "date": "2025-09-03",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Call",
        "description": "Daily standup call with dev team",
        "date": "2025-09-03",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests",
        "date": "2025-09-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Simran",
    "email": "simran.kaur@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 8,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Market Research",
        "description": "Collect data on competitor pricing",
        "date": "2025-09-05",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Presentation",
        "description": "Create slides for management meeting",
        "date": "2025-09-06",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Email Campaign",
        "description": "Draft email campaign for product launch",
        "date": "2025-09-07",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kunal",
    "email": "kunal.gupta@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 8,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels in warehouse",
        "date": "2025-09-03",
        "category": "Operations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Supplier Call",
        "description": "Negotiate rates with supplier",
        "date": "2025-09-04",
        "category": "Procurement",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Invoice Review",
        "description": "Check pending invoices for approval",
        "date": "2025-09-05",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [{
    "id": 1, 
    "email": "gauravkumar@gmail.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}

export const  getLocalStorage = () => {
    const emp  = JSON.parse(localStorage.getItem("employees"))
    const adm  = JSON.parse(localStorage.getItem("admin"))

  return {employees, admin}
    
}
