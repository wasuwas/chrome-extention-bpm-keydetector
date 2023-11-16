chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'analyze_music') {
      // タブで流れている音楽のBPMとKEYを検出する処理（ダミーのコメント）
      // const bpm = detectBPM(); 
      // const key = detectKey();
  
      // ダミーの結果を返す（実際には音楽解析の結果をここで返す）
      const result = {
        bpm: 120,
        key: 'C Major'
      };
  
      sendResponse(result);
    }
  });
  