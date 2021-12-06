export const opLanguage = {
  title: "Op Language",
  caption:
    "Op is an operations-oriented language that helps diagnose, debug, resolve, and automate remediation.",
  content: `---
  As operators, you perform many manual tasks to maintain, monitor, and troubleshoot applications in the production environment.  If you are lucky, these tasks are part of scheduled maintenance operations: a predetermined time block is published, users are notified, systems are quiesced, you go in and do your thing and get out, bring the system back up and inform everyone.

However, more often than not you have to do these manual tasks on-demand to handle a page during an on-call rotation.  Your organization may pursue the goal of NoOps (the idea that a software environment can be completely automated so that there's no need for an operations team to manage it) but we all know that fixing root causes in software takes weeks to months.  And during that time, we keep incurring and executing manual tasks to mitigate the issue.

At the same time, the number of supported environments, Clouds, and software deployments continues to increase, only further putting pressure on your ability to meet SLAs.

Shoreline Op is a purpose-built operations oriented language designed to allow operators and admins to rapidly:

* understand, debug, and fix systems during an operational event
* automate the tasks performed during mitigation in order to reduce or even end future manual processing

## How Op Works

While you (the operator) are debugging, the Op interactive CLI allows you to gather and correlate information about resources, metrics, and system state to give you greater insight and inform the actions you need to take to mitigate the issue.  Afterwards, Op allows the operator to encode behaviors into Actions, Alarms, and Bots to automatically search for and fix the issues, without operator manual intervention going forward.

Using the Op language for "in the moment" debugging and permanent fixing significantly reduces the time to automate.  The statements used during operational work to identify and remediate an issue can be immediately deployed for permanent issue detection and fix.

## The Op Language

Op uses familiar Bash syntax which makes it easy to learn. Its core primitives allow the operator to focus on encoding how to detect and mitigate an event rather than solving distributed systems problems.  Operators tell Op what to look for and how to fix it and then Op handles the undifferentiated heavy lifting such as propagation, error handling, auditing, system lease,...etc.

In the Op Language Guide articles, we will go through how to use Op for both interactive debugging and permanent auto remediation.  We've also published a Glossary that has full documentation for each of the Op commands.

## Pipe 

The Op pipe operator (|) passes the result of the previous command to the following command, similar to a pipe operator in *nix shell environments.

For example, consider the relatively simple-looking Op statement below.

\`hosts | filter(cpu_usage > 80) | "pkill high_cpu_proc"\`

The above statement takes the following steps:

* Gets all host Resources
* Passes those hosts to the filter function, which uses a Metric query to reduce the hosts down to only those with a CPU usage exceeding 80%.
* The filtered hosts are piped to a Linux command that kills the high_cpu_proc process within each.

The pipe operator allows operators to express a powerful sequence of fleet-wide operations and queries in a concise yet easy-to-understand manner.
`,
};
