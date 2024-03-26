<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zirolio/E-Zond/settingsV3.1/main.css"> -->
<link rel="stylesheet" href="./main.css">
<div class="min-w-[490px] py-12 pt-8 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col bg-main1 rounded-xl font-bitter" id="zond-sett">
    <p class="text-4xl mb-8 text-green-500 select-none">Editor Settings</p>

    <img id='hatEditorImg' class="w-[250px] h-[250px] rounded-sm">
    
    <input class="hidden" id='hatEditorFile' accept="image/*" type="file" onchange="window._client.hat.onchange()">
    <button class="hover:redTextShadow-1 hover:redShadow w-[250px] my-2 px-4 py-1 text-lg text-red-400 border-2 border-red-400 rounded-md" onclick="document.getElementById('hatEditorFile').click()">Choice hat</button>
    
    <div class="flex flex-col w-full">
        <div class="flex justify-between items-center w-full px-1 my-3">
            <label class="text-xl text-orange-400 select-none" for="hatEditorScale">Scale:</label>
            <input class="text-orange-400 w-[210px] focus:orangeShadow hover:orangeShadow bg-inherit border-2 border-t-0 rounded-b-md border-orange-400 px-2 py-1" id='hatEditorScale' type="number" step="0.01" min="0.01" value="0.01">
        </div>
        <div class="flex justify-between items-center w-full px-1 my-3">
            <label class="text-xl text-orange-400 select-none" for="hatEditorFilter">Filter:</label>
            <input class="text-orange-400 w-[210px] focus:orangeShadow hover:orangeShadow bg-inherit border-2 border-t-0 rounded-b-md border-orange-400 px-2 py-1" id='hatEditorFilter' type="color" step="0.01" min="0.01" value="0.01">
        </div>
    </div>
    <!-- Exit -->
    <button class="hover:greenTextShadow-1 hover:greenShadow mt-6 px-10 py-1 text-2xl text-green-500 border-2 border-green-500 rounded-md" onclick="">Exit</button>
</div>