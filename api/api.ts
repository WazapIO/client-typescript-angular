export * from './groupManagement.service';
import { GroupManagementService } from './groupManagement.service';
export * from './instance.service';
import { InstanceService } from './instance.service';
export * from './messageSending.service';
import { MessageSendingService } from './messageSending.service';
export * from './miscellaneous.service';
import { MiscellaneousService } from './miscellaneous.service';
export const APIS = [GroupManagementService, InstanceService, MessageSendingService, MiscellaneousService];
