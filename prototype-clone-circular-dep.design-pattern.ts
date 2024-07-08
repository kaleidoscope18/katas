class Employee {
    name: string
    hireDate: Date
    manager: Manager

    public clone(): this {
        const clone = Object.create(this)
        clone.hireDate = Object.create(this.hireDate)
        clone.manager = {
            ...this.manager,
            employee: { ...this },
        };

        return clone
    }
}

class Manager {
    employee: Employee

    constructor(employee: Employee) {
        this.employee = employee
    }
}

// --------

function clientCode() {
    const employee = new Employee();
    employee.name = 'Hercules';
    employee.hireDate = new Date();
    employee.manager = new Manager(employee);

    const cloneOfEmployee = employee.clone();
    if (employee.name === cloneOfEmployee.name) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (employee.hireDate === cloneOfEmployee.hireDate) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (employee.manager === cloneOfEmployee.manager) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (employee.manager.employee === cloneOfEmployee.manager.employee) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}

clientCode();