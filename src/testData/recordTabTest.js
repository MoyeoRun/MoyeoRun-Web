const recordTabProps = {
  singleRecordList: {
    totalTime: 10140500,
    totalDistance: 21.014777005689231924,
    totalAveragePace: 6.60574918775294,
    analysisRunningListBetweenTerm: [
      {
        count: 1,
        date: '2021-11-10T15:10:58.729Z',
        totalDistanceOfTerm: 8.11096274582159999,
        totalTimeOfTerm: 3140500,
        averagePaceOfTerm: 6.440367337799158,
      },
      {
        count: 1,
        date: '2021-11-12T20:11:00.158Z',
        totalDistanceOfTerm: 13.1038142598676319346,
        totalTimeOfTerm: 7140500,
        averagePaceOfTerm: 6.77113103770671,
      },
      {
        count: 1,
        date: '2021-11-13T20:11:00.158Z',
        totalDistanceOfTerm: 13.1038142598676319346,
        totalTimeOfTerm: 7140500,
        averagePaceOfTerm: 6.77113103770671,
      },
    ],
    runningList: [
      {
        id: '6190237c551be501ace25846',
        user: {
          email: 'sjsjsj1246@naver.com',
          id: 1,
        },
        type: 'distance',
        targetDistance: null,
        targetTime: null,
        runPace: 0,
        runTime: 2649,
        runDistance: 0,
        createdAt: '2021-11-10T15:10:58.729Z',
        runData: [
          [
            {
              latitude: 37.6292293,
              longitude: 127.0815215,
              currentAltitude: 67.9750773967984,
              currentTime: 2304,
              currentDistance: 0,
              currentPace: 0,
            },
          ],
        ],
      },
      {
        id: '61904420551be501ace25854',
        user: {
          email: 'sjsjsj1246@naver.com',
          id: 1,
        },
        type: 'time',
        targetDistance: null,
        targetTime: null,
        runPace: 409.79795127093143,
        runTime: 10899,
        runDistance: 0.0004432672233637034,
        createdAt: '2021-11-12T20:11:00.158Z',
        runData: [[]],
      },
      {
        id: '619045db551be501ace25858',
        user: {
          email: 'sjsjsj1246@naver.com',
          id: 1,
        },
        type: 'free',
        targetDistance: null,
        targetTime: null,
        runPace: 84.63685435018705,
        runTime: 9286,
        runDistance: 0.0017618408412214002,
        createdAt: '2021-11-13T20:11:00.158Z',
        runData: [
          [
            {
              latitude: 37.6292295,
              longitude: 127.081579,
              currentAltitude: 67.98016283962113,
              currentTime: 861,
              currentDistance: 0,
              currentPace: 0,
            },
            {
              latitude: 37.6292293,
              longitude: 127.081569,
              currentAltitude: 67.99746650753276,
              currentTime: 5850,
              currentDistance: 0.0008809204206107001,
              currentPace: 94.38991088701982,
            },
          ],
          [
            {
              latitude: 37.6292291,
              longitude: 127.0815789,
              currentAltitude: 68.03312571509716,
              currentTime: 8947,
              currentDistance: 0.0017618408412214002,
              currentPace: 94.38991088701982,
            },
          ],
        ],
      },
    ],
  },
  multiRecordList: {
    totalTime: 10170869,
    totalDistance: 21.4948360000001,
    totalAveragePace: 7.335090205541217,
    analysisRunningListBetweenTerm: [
      {
        count: 1,
        date: '2021-11-12T17:11:43.749Z',
        totalDistanceOfTerm: 9.213548,
        totalTimeOfTerm: 3170869,
        averagePaceOfTerm: 7.231213545312,
      },
      {
        count: 7,
        date: '2021-11-13T23:37:55.754Z',
        totalDistanceOfTerm: 12.281288,
        totalTimeOfTerm: 6170869,
        averagePaceOfTerm: 7.438966865770432,
      },
    ],
    runningList: [
      {
        multiRoom: {
          id: 9,
          roomImage: null,
          title: '방 제목',
          status: 'Close',
          description: '같이 뛰아요',
          startDate: '2021-11-12T17:11:43.749Z',
          targetDistance: 5,
          targetTime: 500000,
          limitMember: 4,
          distance: 3.5,
          time: 400000,
          pace: 7.1,
        },
        rank: 1,
      },
      {
        multiRoom: {
          id: 10,
          roomImage:
            'https://moyeo-run.s3.ap-northeast-2.amazonaws.com/1638164094097-han-river-g481b2c736_1920.jpg',
          title: '방 제목',
          status: 'Close',
          description: '같이 뛰아요',
          startDate: '2021-11-13T23:37:55.754Z',
          targetDistance: 5,
          targetTime: 500000,
          limitMember: 4,
          distance: 3.5,
          time: 400000,
          pace: 7.1,
        },
        rank: 1,
      },
    ],
  },
};

export default recordTabProps;
