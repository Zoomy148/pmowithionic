export interface CommerceActiveProject  {
    changeDate: string;
    id: number;
    projectCode: string;
    projectComments: string;
    projectDirectionId: number;
    projectDirectionName: string;
    projectId: number;
    projectLeaderId: number;
    projectLeaderName: string;
    projectName: string;
    projectProblems: string;
    requisites: string;
    statusContract: string;
    projectCommerceStageItems: [
        {
            dateOfSigningTheAct: string;
            payDayInDoc: string;
            payDayInFact: string;
            stageComments: string;
            stageEndDate: string;
            stageName: string;
            stageProblem: string;
            stageRequisites: string;
            stageStatus: string;
            stageStatusAct: string;
            sumFinal: number;
            sumOfPaySubcontractors: number;
            sumOfStage: number;
        }
    ];
    projectCommerceFileItem: [
        {
            fileNumber: number;
            fileName: string;
            fileDirection: string;
            fileDescription: string;
        }

    ];
}
