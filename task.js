var Student = /** @class */ (function () {
    function Student(FIO, birthDate, phone, city, country, institution, groupNumber) {
        this.FIO = FIO;
        this.birthDate = birthDate;
        this.phone = phone;
        this.city = city;
        this.country = country;
        this.institution = institution;
        this.groupNumber = groupNumber;
    }
    // FIO
    Student.prototype.getFIO = function () {
        return this.FIO;
    };
    Student.prototype.setFIO = function (value) {
        this.FIO = value;
    };
    // birthDate
    Student.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Student.prototype.setBirthDate = function (value) {
        this.birthDate = value;
    };
    // phone
    Student.prototype.getPhone = function () {
        return this.phone;
    };
    Student.prototype.setPhone = function (value) {
        this.phone = value;
    };
    // city
    Student.prototype.getCity = function () {
        return this.city;
    };
    Student.prototype.setCity = function (value) {
        this.city = value;
    };
    // country
    Student.prototype.getCountry = function () {
        return this.country;
    };
    Student.prototype.setCountry = function (value) {
        this.country = value;
    };
    // institution
    Student.prototype.getInstitution = function () {
        return this.institution;
    };
    Student.prototype.setInstitution = function (value) {
        this.institution = value;
    };
    // groupNumber
    Student.prototype.getGroupNumber = function () {
        return this.groupNumber;
    };
    Student.prototype.setGroupNumber = function (value) {
        this.groupNumber = value;
    };
    Student.prototype.EnterStudentInfo = function (FIO, birthDate, phone, city, country, institution, groupNumber) {
        this.setFIO(FIO);
        this.setBirthDate(birthDate);
        this.setPhone(phone);
        this.setCity(city);
        this.setCountry(country);
        this.setInstitution(institution);
        this.setGroupNumber(groupNumber);
    };
    Student.prototype.displayStudentInfo = function () {
        return "<tr>\n                    <td>".concat(this.getFIO(), "</td>\n                    <td>").concat(this.getBirthDate(), "</td>\n                    <td>").concat(this.getPhone(), "</td>\n                    <td>").concat(this.getCity(), "</td>\n                    <td>").concat(this.getCountry(), "</td>\n                    <td>").concat(this.getInstitution(), "</td>\n                    <td>").concat(this.getGroupNumber(), "</td>\n                </tr>");
    };
    return Student;
}());
// массив объектов класса Student
var students = [
    new Student("Иванов Иван Иванович", "01.01.2000", 1234567890, "Одесса", "Украина", "ИНЯЗ", 101),
    new Student("Петров Петр Петрович", "02.02.2001", 9876543210, "Харьков", "Украина", "ВНЗ", 102),
    new Student("Федоров Федор Федорович", "03.03.2002", 1357924680, "Львов", "Украина", "ВНЗ", 103)
];
// HTML для отображения данных в виде таблицы
var tableHTML = "\n    <style>\n        table {\n            border-collapse: collapse;\n            width: 100%;\n        }\n        th, td {\n            border: 1px solid black;\n            padding: 8px;\n            text-align: left;\n        }\n        th {\n            background-color: #f2f2f2;\n        }\n    </style>\n    <table>\n        <tr>\n            <th>\u0424\u0418\u041E</th>\n            <th>\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</th>\n            <th>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</th>\n            <th>\u0413\u043E\u0440\u043E\u0434</th>\n            <th>\u0421\u0442\u0440\u0430\u043D\u0430</th>\n            <th>\u0423\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435</th>\n            <th>\u041D\u043E\u043C\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B</th>\n        </tr>\n";
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    tableHTML += student.displayStudentInfo();
}
tableHTML += "</table>";
document.body.innerHTML = tableHTML;
