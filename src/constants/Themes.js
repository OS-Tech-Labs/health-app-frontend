
// color design themes 
export const tokensDark ={
    
        grey: {
              0: "#ffffff",
             10: "#f6f6f6" ,
             50: "#f0f0f0" ,
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
            1000: "#000000",
    },
    primary: {
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812"
},
Secondary: {
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14"
},
    
    
}   



function reverseTokens(tokensDark){
const reversedTokens ={}
Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
const length = keys.length;
const reverseObj=  {};
for(let i =0;i< length; i++){
        reverseObj[keys[i]] = values[length - i -1];
}
reversedTokens[key] = reverseObj;
});

return reversedTokens;

}

export const tokensLight = reverseTokens(tokensDark);

//mui theme Settings
export const themeSettings = (mode)=> {
        return{
                palette:{
                    mode: mode,
                    ...(mode ==="dark" ?
                    {
                        
                        primary:{
                                ...tokensDark.primary,
                                main: tokensDark.primary[400],
                                Light:tokensDark.primary[400],

                        },
                        secondary:{
                                ...tokensDark.Secondary,
                                main:tokensDark.Secondary[300],
                        },
                        neutral: {
                                ...tokensDark.grey,
                                main:tokensDark.grey[500],
                        },
                        background: {
                                default: tokensDark.primary[600],
                                alt: tokensDark.primary[500],
                        }

                }
                :{
                        //pallete values for light mode
                        primary:{
                                ...tokensLight.primary,
                                main: tokensDark.grey[50],
                                Light:tokensDark.grey[100],

                        },
                        secondary:{
                                ...tokensLight.Secondary,
                                main:tokensDark.Secondary[600],
                                light : tokensLight.Secondary[700],
                        },
                        neutral: {
                                ...tokensLight.grey,
                                main:tokensDark.grey[500],
                        },
                        background: {
                                default: tokensDark.primary[0],
                                alt: tokensDark.primary[50],
                        },
                        }),

                },
                typography :{
                        fontFamily :["Inter", "sans-serif"].join(","),
                        fontSize:12,
                        h1:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 40,
                        },
                        h2:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 32,
                        },
                        h3:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 24,
                        },
                        h4:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 20,
                        },
                        h5:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 16,
                        },
                        h6:{
                                fontFamily:["inter, sans-serif"].join(","),
                                fontSize: 14,
                        },
                },
                    
                };
        };


