export const alarms = {
  title: "Alarms",
  caption:
    "Alarms are fully-customizable Metric or status checks that automatically trigger remediation Actions.",
  content: `---
 Alarms frequently check one or more Metric thresholds or custom Resource queries. The Alarm is raised based on custom thresholds or shell commands you define, which informs any connected Bot to trigger remedial Actions.


## Alarm Properties

Each Alarm can define many properties to determine its behavior. The required properties when creating an Alarm are:

* [name](https://docs.shoreline.io/alarms/properties#name) - The name of the Alarm.
* [fire_query](https://docs.shoreline.io/alarms/properties#fire_query) - The Op statement that triggers the Alarm.
* [clear_query](https://docs.shoreline.io/alarms/properties#clear_query) - The Op statement that clears the Alarm.
* [resource_query](https://docs.shoreline.io/alarms/properties#resource_query) - The Op query that selects which Resources the Alarm triggers from.

Check out [Alarm Properties](https://docs.shoreline.io/alarms/properties) for details on all available properties and how to use them.

## Create an Alarm

Below we'll walk through how to create an Alarm within the CLI that meets the following criteria:

* Applies to all host Resources within the us-east-1a Availability Zone
* Fires whenever CPU usage exceeds 65% for at least 15 seconds during the previous 30-second period
* Resolves whenever CPU usage falls below 55% for at least 20 seconds during the previous 30-second period

Creating basic shell script Alarms with Op uses the following syntax: alarm <name> = <fire_query>

* name - The name of the Alarm. This value must contain only alphanumeric or underscore characters, and must be globally unique.
* fire_query - The Op statement that triggers the Alarm.
 `,
};
