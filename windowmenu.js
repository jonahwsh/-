async function createMenu() {
  const div = document.createElement('div');
  div.id = "extension";

  const buttonsHTML = `
    <div
    class="fixed bottom-4 left-4 w-96 h-50 bg-[#141622] z-50 flex flex-col select-none shadow-xl font-sans transition-all duration-400 animation-open rounded-md"
  >
    <div class="bg-[#191B27] rounded-md h-10 flex">
      <p class="text-gray-500 mx-5 mt-2">Solebox Human Module</p>
      <p id="switchPage" onclick="switchPage()">S</p>
    </div>
    <div
      class="bg-[#191B27] mt-5 w-[90%] mx-4 rounded-md h-32 mb-5 text-gray-600"
    >
      <div id="contentdiv">
        <p class="mx-4 text-[12px] mt-1">Status</p>

        <div
          class="bg-[#141622] mx-4 w-[90%] mt-1 rounded-md h-10 flex items-center"
        >
          <p id="task-status" class="mt-[1px] mx-[10px]">Processing Order</p>
        </div>

        <div class="justify-center space-x-2 mx-4 mt-2">
          <button class="bg-red-500 text-white py-2 px-10 rounded-md">
            Stop
          </button>
          <button class="bg-[#6166DC] text-white py-2 px-10 rounded-md">
            Clear Basket
          </button>
        </div>
      </div>

      <div id="settings-div" class="hidden">
        <p class="mx-4 text-[12px] mt-1">Enter Proxy</p>

        <input
          class="bg-[#141622] mx-4 w-[90%] mt-1 rounded-md h-10 flex items-center"
        >
        
        </input>

        <div class="justify-center space-x-2 mx-4 mt-2">
          <button class="bg-red-500 text-white py-2 px-7 rounded-md" id="removeProxyBtn">
            Remove Proxy
          </button>
          <button class="bg-[#6166DC] text-white py-2 px-7 rounded-md" onclick="setProxy(document.getElementById('proxyInput').value);">
            Set Proxy
          </button>
        </div>
      </div>
    </div>
  </div>
  `;

  div.innerHTML = buttonsHTML;
  document.body.appendChild(div);
}

const tailwindCSS = document.createElement('script');
tailwindCSS.src = "https://cdn.tailwindcss.com/";
document.head.appendChild(tailwindCSS);

const funcsScript = document.createElement('script');
funcsScript.src = "websitemenu.js";
document.head.appendChild(funcsScript);


// window.onload = async () => {
//   await createMenu();
// };
