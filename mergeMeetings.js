/*

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

*/


function mergeRanges(meetings) {
  // sort meetings by startTime: O(nlogn)
  meetings.sort((firstRange, secondRange) => firstRange.startTime > secondRange.startTime);
  let result = [];
  // go through sorted meeting ranges: O(n)
  for (let i = 1; i < meetings.length; i++) {
    // check if current meeting overlaps with previous meeting
    if (meetings[i].startTime <= meetings[i - 1].endTime) {
      // merge current meeting with previous meeting
      meetings[i].startTime = Math.min(meetings[i].startTime, meetings[i - 1].startTime);
      meetings[i].endTime = Math.max(meetings[i].endTime, meetings[i - 1].endTime);
    } else {
      result.push(meetings[i - 1]);
    }
    // push last meeting into result
    if (i === meetings.length - 1) {
      result.push(meetings[meetings.length - 1]);
    }
  }
  return result;
}

function mergeRangesAlt(meetings) {
  meetings.sort((firstRange, secondRange) => firstRange.startTime > secondRange.startTime);
  // initialize mergedMeetings with the earliest meeting
  let mergedMeetings = [meetings[0]];
  for (let i = 1; i < meetings.length; i++) {
    let currentMeeting = meetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    // if the current meeting overlaps with the last merged meeting, use the later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    // add the current meeting since it doesn't overlap
    } else {
        mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
}
