export const actions = {
  title: "Actions",
  caption:
    "Actions are customizable auto-remediation and diagnostic tools that act upon Resources to help resolve Alarms.\n",
  content: `---
  Actions execute shell commands on associated Resources. Whenever an Alarm fires the associated Bot triggers the corresponding Action, closing the basic auto-remediation loop of Shoreline.

## Action Properties

Each Action has many properties that determine its behavior. The required properties are:

* [name](https://docs.shoreline.io/actions/properties#name) - The name of the Action.
* [command](https://docs.shoreline.io/actions/properties#command) - The shell command executed when the Action triggers.

Check out [Action Properties](https://docs.shoreline.io/actions/properties) for details on all available properties and how to use them.

## Create an Action

Create an Action with Op using the following syntax: \`action <name> = <command>\`.

* name - The name of the Action.
* command - The shell command executed when the Action triggers.
`,
};
