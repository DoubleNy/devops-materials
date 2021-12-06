export const bots = {
  title: "Bots",
  caption: "Alarms use Bots to execute automated Actions.",
  content: `---
  A Bot connects a single Alarm to one or more Actions. When the Alarm is raised the Bot fires all associated and enabled Actions to close the auto-remediation loop.

## Bot Properties

Each Bot has various configurable properties that determine its behavior. The minimal required properties to create a Bot are:

* [name](https://docs.shoreline.io/bots/properties/name) - The name of the Bot
* [command](https://docs.shoreline.io/bots/properties/command) - An if-then-fi statement containing the Alarm name and Action name associated with the Bot. Alternatively, the command property can be a custom Linux command.


## Create a Bot

Bots are created using either the CLI or the Configuration UI.

The command property is automatically defined when creating a Bot within the CLI. The basic Op syntax is:

\`bot <name> = <command>\`

The <command> line must be provided in the following format:

\`bot <name> = if <alarm_name> then <action_name> fi\`

* alarm_name The name of the Alarm that the Bot monitors.
* action_name - The name of the Action the Bot triggers when the monitored <alarm_name> Alarm is raised.

For example, the following creates a high_cpu_bot that fires the high_cpu_action when the high_cpu_alarm is raised.

\`bot high_cpu_bot = if high_cpu_alarm then high_cpu_action fi\`
`,
};
