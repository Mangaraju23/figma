export interface CompleteProjectResponseI {
  admin: boolean;
  status: string;
  reportingDate: string;
  data: CompleteProjectModel[];
}

export interface CompleteProjectModel {
  editable ?: boolean,
  project: {
    client: string;
    projectName: string;
    projectDetail: {
      projectStatus: string;
      clientPartner: string;
      onshoreEdm: string;
      offshoreEm: string;
      remarks: string;
      projStartDate: string;
      projEndDate: string;
      sowStart: string;
      sowEnd: string;
      model: string;
      department: string;
      deliveryPractice: string;
      vertical: string;
      deliveryModel: string;
      technology: string;
      onshore: number;
      offshore: number;
      nblHcOnshore: number;
      nblHcOffshore: number;
      eltJumpOn: number;
      eltJumpOff: number;
      total: number;
      ragStatus: string;
      projectRemarks: string;
      ragReason: string;
      goGreenPlan: string;
    };
    governance: {
      performanceKpiSla: string;
      qualityPerformanceAudit: string;
      dailyInternal: string;
      weeklyInternal: string;
      monthlyInternal: string;
      quarterlyInternal: string;
      dailyStandUpsExternal: string;
      weeklyExternal: string;
      monthlyExternal: string;
      quarterlyExternal: string;
      includingCesLeadership: string;
      govRemarks: string;
    };
  };
}

export const emptyProject = (): CompleteProjectModel => ({
  project: {
    client: '',
    projectName: '',
    projectDetail: {
      projectStatus: '',
      clientPartner: '',
      onshoreEdm: '',
      offshoreEm: '',
      remarks: '',
      projStartDate: '',
      projEndDate: '',
      sowStart: '',
      sowEnd: '',
      model: '',
      department: '',
      deliveryPractice: '',
      vertical: '',
      deliveryModel: '',
      technology: '',
      onshore: 0,
      offshore: 0,
      nblHcOnshore: 0,
      nblHcOffshore: 0,
      eltJumpOn: 0,
      eltJumpOff: 0,
      total: 0,
      ragStatus: '',
      projectRemarks: '',
      ragReason: '',
      goGreenPlan: '',
    },
    governance: {
      performanceKpiSla: '',
      qualityPerformanceAudit: '',
      dailyInternal: '',
      weeklyInternal: '',
      monthlyInternal: '',
      quarterlyInternal: '',
      dailyStandUpsExternal: '',
      weeklyExternal: '',
      monthlyExternal: '',
      quarterlyExternal: '',
      includingCesLeadership: '',
      govRemarks: '',
    },
  },
});
