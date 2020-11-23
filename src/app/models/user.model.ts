export interface UserModel {
    id: string;
    name: string;
    img: string;
    group: string;
    position: string;
    leader: string;
    experience: [string];
    note: string;
    certificates: string;
    comments: string;
    free: number;
    activity: any;
    month: any;
    project: any;
    projectname: any;
    busy: any;
}

interface Employee {
    UserId: number; // Айди сотрудника //
    UserName: string; // Имя сотрудника //
    UserSurname: string; // Фамилия сотрудника//
    UserLastName: string; // Отчество сотрудника //
    UserGroup: string; // Группа сотрудника //
    UserPosition: string; // Должность сотрудника //
    UserContactPerson: string; // Контактное лицо //
    UserTelephoneNumber: string; // Номер телефона //
    UserEmailAdress: string; // Эмайл адресс сотрудника //
    UserTelegramNickname: string; // Телеграмм сотрудника //
    UserNotes: string; // Примечания//
    UserComments: string; // Комментарии//
    UserSkills: string[]; // Компетенции,навыки,сертификаты //
    UserActivity: [ // Активность сотрудника по месяцам //
        {
            month: string; // Месяц //
            preoject: [ // Проекты в этом месяце//
                {
                    ProjectName: string; // Имя проекта//
                    ProjectBusy: number; // Занятость сотрудника по этому проекту //
                }
            ]
        }
    ];
}
