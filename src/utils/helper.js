import moment from "moment/moment";

export const getTimeElpased = (date) => moment(date).fromNow();
