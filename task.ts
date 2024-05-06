class Student {
    private FIO: string;
    private birthDate: string;
    private phone: number;
    private city: string;
    private country: string;
    private institution: string;
    private groupNumber: number;

    constructor(FIO: string, birthDate: string, phone: number, city: string, country: string, institution: string, groupNumber: number ) {
        this.FIO = FIO;
        this.birthDate = birthDate;
        this.phone = phone;
        this.city = city;
        this.country = country;
        this.institution = institution;
        this.groupNumber = groupNumber;
    }

    // FIO
    public getFIO(): string {
        return this.FIO;
    }
    public setFIO(value: string) {
        this.FIO = value;
    }

    // birthDate
    public getBirthDate(): string {
        return this.birthDate;
    }
    public setBirthDate(value: string) {
        this.birthDate = value;
    }

    // phone
    public getPhone(): number {
        return this.phone;
    }
    public setPhone(value: number) {
        this.phone = value;
    }

    // city
    public getCity(): string {
        return this.city;
    }
    public setCity(value: string) {
        this.city = value;
    }

    // country
    public getCountry(): string {
        return this.country;
    }
    public setCountry(value: string) {
        this.country = value;
    }

    // institution
    public getInstitution(): string {
        return this.institution;
    }
    public setInstitution(value: string) {
        this.institution = value;
    }

    // groupNumber
    public getGroupNumber(): number {
        return this.groupNumber;
    }
    public setGroupNumber(value: number) {
        this.groupNumber = value;
    }

    public EnterStudentInfo(FIO: string, birthDate: string, phone: number, city: string, country: string, institution: string, groupNumber: number)
    {
        this.setFIO(FIO);
        this.setBirthDate(birthDate);
        this.setPhone(phone);
        this.setCity(city);
        this.setCountry(country);
        this.setInstitution(institution);
        this.setGroupNumber(groupNumber);
    }


    public displayStudentInfo(): string {
        return `<tr>
                    <td>${this.getFIO()}</td>
                    <td>${this.getBirthDate()}</td>
                    <td>${this.getPhone()}</td>
                    <td>${this.getCity()}</td>
                    <td>${this.getCountry()}</td>
                    <td>${this.getInstitution()}</td>
                    <td>${this.getGroupNumber()}</td>
                </tr>`;
    }


}

// массив объектов класса Student
let students: Student[] = [
    new Student("Иванов Иван Иванович", "01.01.2000", 1234567890, "Одесса", "Украина", "ИНЯЗ", 101),
    new Student("Петров Петр Петрович", "02.02.2001", 9876543210, "Харьков", "Украина", "ВНЗ", 102),
    new Student("Федоров Федор Федорович", "03.03.2002", 1357924680, "Львов", "Украина", "ВНЗ", 103)
];

// HTML для отображения данных в виде таблицы
let tableHTML: string = `
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
    <table>
        <tr>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>Телефон</th>
            <th>Город</th>
            <th>Страна</th>
            <th>Учебное заведение</th>
            <th>Номер группы</th>
        </tr>
`;

for (let student of students) {
    tableHTML += student.displayStudentInfo();
}

tableHTML += `</table>`;

document.body.innerHTML = tableHTML;