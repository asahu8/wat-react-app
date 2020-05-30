import React, { useState,  createContext } from 'react'

type footerState = {
  content: string,
  assignContent: any,
  footerData: Array<any>,
  assignFooterData: any
}

export const FooterContext =  createContext<footerState>({
  content: '',
  assignContent: null,
  footerData: [],
  assignFooterData: null

});

function FooterContextProvider(props: any) {
  const [content, setContent] = useState("");
  const [footerData, setFooterData] = useState([]);

  const assignContent = (e: any) => { setContent(e); }
  const assignFooterData = (e: any) => { setFooterData(e); }

  return (
    <FooterContext.Provider value={{content, assignContent, footerData, assignFooterData }}>
      {props.children}
    </FooterContext.Provider>
  );
}

export default  FooterContextProvider;
