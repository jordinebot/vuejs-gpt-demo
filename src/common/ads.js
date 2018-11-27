const GPT_ID = process.env.VUE_APP_GPT_ID;

export const inventory = {
    Example_300x250: {
        path: `/${GPT_ID}/Example_300x250`,
        size: [300, 250],
        dom_id: `Example_300x250`
    },
    Example_300x250_Flex: {
        path: `/${GPT_ID}/Example_300x250_Flex`,
        size: [300, 250],
        dom_id: `Example_300x250_Flex`
    },
    Example_300x600: {
        path: `/${GPT_ID}/Example_300x600`,
        size: [300, 600],
        dom_id: `Example_300x600`
    },
    Example_320x50: {
        path: `/${GPT_ID}/Example_320x50`,
        size: [320, 50],
        dom_id: `Example_320x50`
    },
    Example_728x90: {
        path: `/${GPT_ID}/Example_728x90`,
        size: [728, 90],
        dom_id: `Example_728x90`
    }
};

export const defineSlots = units => {
    window.googletag.cmd.push(function() {
        for (let { path, size, dom_id } of units) {
            let gpt_slot = window.googletag.defineSlot(path, size, dom_id);
            gpt_slot.addService(window.googletag.pubads());
        }
        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();
    });
};

export const displayAds = slots => {
    slots.forEach(slot =>
        window.googletag.cmd.push(function() {
            console.log(`Calling display for ${slot.id}`);
            window.googletag.display(slot.id);
        })
    );
};
