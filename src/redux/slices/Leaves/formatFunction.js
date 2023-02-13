import { getUserId } from "../../../helpers/Utils";

export const formatLeaveModalData = (data) => {
  const { fromDate, toDate, fromSession, toSession, days, mailTo, reason } =
    data;
  const formatLeaveData = {
    holiday: {
      user_id: getUserId(),
      from_date: fromDate,
      to_date: toDate,
      from_session: fromSession,
      to_session: toSession,
      days: days,
      mail_to: mailTo,
      reason: reason,
    },
  };
  return formatLeaveData;
};

export const formatGetLeaveData = (data) => {
  
  const formatLeaveData = {
    leaveData: data.map(
      ({
        id,
        from_date,
        to_date,
        from_session,
        to_session,
        days,
        mail_to,
        reason,
      }) => {
        return {
          id: id,
          user_id: getUserId(),
          fromDate: from_date,
          toDate: to_date,
          fromSession: from_session,
          toSession: to_session,
          days: days,
          mailTo: mail_to,
          reason: reason,
        };
      }
    ),
  };

  return formatLeaveData;
};

export const formatGetLeaveDataById = (data) => {
  const {
    id,
    from_date,
    to_date,
    from_session,
    to_session,
    days,
    mail_to,
    reason,
  } = data;
  const formatLeaveDataById = {
    id:id,
    userId: getUserId(),
    fromDate: from_date,
    toDate: to_date,
    fromSession: from_session,
    toSession: to_session,
    days: days,
    mailTo: mail_to,
    reason: reason,
  };

  return formatLeaveDataById;
};
