const videoData = {
    "Ag": {
        "OH": "https://drive.google.com/file/d/10y9S-1a0sDRwsGlllVKcQR5kVzTR76ER/preview",
        "PO4": "https://drive.google.com/file/d/1nHJgyogxo4mzstmUjJCDIE4BQ1XSleos/preview",
        "CO3": "https://drive.google.com/file/d/14iDo1b4z1gzbeI7-oxrq-hISdzeluvq4/preview",
        "SO4": "https://drive.google.com/file/d/1oisGz_rlier0NBuI7aPACUy_me3Nz_fo/preview",
        "S": "https://drive.google.com/file/d/18JBpxUwqjaubgSFwrVmRs8bw_qY67BsA/preview",
        "Cl": "https://drive.google.com/file/d/1-_SyjssS9FASouRQS6RJ_Pz1c21uw0MM/preview"
    },
    "Cu": {
        "OH": "https://drive.google.com/file/d/1Lqs_lPu2A7D6AoQOlkkmq-gZBlhbODDU/preview",
        "PO4": "https://drive.google.com/file/d/1MjBjN6lACR3zVn1NOnr2Z7Bo6tAVIE43/preview",
        "CO3": "https://drive.google.com/file/d/11CGtT75mP2y4cJoKl4oxYg2GN0nuWOFi/preview",
        "S": "https://drive.google.com/file/d/1pkqaGK5E9QgBWckNKJPerjtHxWQA9Cfo/preview"
    },
    "Mg": {
        "OH": "https://drive.google.com/file/d/1532HJCJSBefsF40wOw-FNc1HSp1P3ipt/preview",
        "PO4": "https://drive.google.com/file/d/1r5a5zxEOG_B6oyAORXMfX2bFE_rFRBpQ/preview",
        "CO3": "https://drive.google.com/file/d/1YM_EUXBpMob_uLX3mERXcSJNRJ9XcHyU/preview",
        "S": "https://drive.google.com/file/d/1XBWZd4OuM9SNfVDULUzIRMg__PFdqNmp/preview"
    },
    "Ca": {
        "OH": "https://drive.google.com/file/d/1h9_91ThPa4J-LMrRzAnmmJci_A_CPbcz/preview",
        "PO4": "https://drive.google.com/file/d/1IuoX5FR5BIGMMtf803-ZMRepTU_0Mg9V/preview",
        "CO3": "https://drive.google.com/file/d/1kET4Uz55mw_lh5fD27rxedhapChF_pYs/preview",
        "SO4": "https://drive.google.com/file/d/1BFVwjeTrXgIQG1H0if-nHHqR9iWfBjWy/preview"
    },
    "Ba": {
        "PO4": "https://drive.google.com/file/d/1oGtYDMquXB_5hJDXhc6Sq5RF4aA1Xhs5/preview",
        "CO3": "https://drive.google.com/file/d/1kLNoDsYfbg49X0N8uOxDRTkC59K4WF4c/preview",
        "SO4": "https://drive.google.com/file/d/1v-OoAVr4_NohYLbeHoHp002j-oRnrFuz/preview"

    },
    "Fe2": {
        "OH": "https://drive.google.com/file/d/1UixGDLm5vL30lO6KfAWqKPUBgS7lbo_Y/preview",
        "PO4": "https://drive.google.com/file/d/1u-hL1A8V6cfWQAJbykVVQCfGQ4tz4HLd/preview",
        "CO3": "https://drive.google.com/file/d/1DX7gIZVZ8eQ3kD3KPY-rVggq95xwanzB/preview",
        "S": "https://drive.google.com/file/d/1nBU3_3eDmvglNEPcaWMRcGn2DTJDTo0q/preview"
    },
    "Fe3": {
        "OH": "https://drive.google.com/file/d/1kK2tgu2mgAZ2xYxFWqnsIYOTpBqgFQsv/preview",
        "PO4": "https://drive.google.com/file/d/1vC-mqGKPW94nJ4vi7e4UM85I53pEJdGJ/preview",
        "CO3": "https://drive.google.com/file/d/1fgLYUSjc46cp9dStM9YLtzKYoAQB2KYB/preview",
        "S": "https://drive.google.com/file/d/1qzJic4mjIKX_FbWoA9QncIVmaZ-UjWQr/preview"
    },
    "Al": {
        "OH": "https://drive.google.com/file/d/1d2WA55qqgOFcDHBbiZU2bwlDU_hNnMS2/preview",
        "PO4": "https://drive.google.com/file/d/11EAZ65WtZCDpJpqNsP7RfNzZX62gdUDS/preview",
        "CO3": "https://drive.google.com/file/d/1jDExTAhKX45qjKpp5D7Huuj1z5ARjISi/preview",
        "S": "https://drive.google.com/file/d/19L9mubUPdPZe3WlhCEYljf9F1toAzoQB/preview",
    },
    "Cr3": {
        "OH": "https://drive.google.com/file/d/1XVzUf7szoXS76XsMrQlKGOfAH-4gjzKP/preview",
        "PO4": "https://drive.google.com/file/d/1lJEhwTh1NWyr1SLsohZd_OWHxrXkudVe/preview",
        "CO3": "https://drive.google.com/file/d/138VBkpGo0QJ1Cknu6-u3eCe4iRTawz42/preview",
        "S": "https://drive.google.com/file/d/1ilyJShkujr_2Hvy4JQ99a1uMfzi7haeJ/preview"
    }
}

function getVideoURLFromParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cation = urlParams.get("cation");
    const anion = urlParams.get("anion");
    return videoData[cation][anion];
}

function iframeSrcChange() {
    document.getElementById("videoIframe").src = getVideoURLFromParams();
}

iframeSrcChange();
