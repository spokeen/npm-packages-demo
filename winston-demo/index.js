var winston = require("winston");
var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      name: "info-file",
      filename: "filelog-info.log",
      level: "info",
    }),
    new winston.transports.File({
      name: "error-file",
      filename: "filelog-error.log",
      level: "error",
    }),
  ],
});

logger.log("info", "Hello distributed log files!");
logger.info("Hello again distributed info");
logger.error("Hello again distributed error");

logger.level = "debug";
logger.log("debug", "Now my debug messages are written to console!");
