document.getElementById('analyzeButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'analyze_music' }, function(response) {
        console.log(response); // 音楽解析の結果をコンソールに表示
      });
    });
  });
  