import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { PageContainer } from "./PdfViewerComponents";

function PdfViewerText() {
  const markdown = `
  # h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
  
  
  ## Horizontal Rules
  
  ___
  
  ---
  
  ***
  
  
  ## Typographic replacements
  
  Enable typographer option to see result.
  
  (c) (C) (r) (R) (tm) (TM) (p) (P) +-
  
  test.. test... test..... test?..... test!....
  
  !!!!!! ???? ,,  -- ---
  
  "Smartypants, double quotes" and 'single quotes'
  
  
  ## Emphasis
  
  **This is bold text**
  
  __This is bold text__
  `;
  return <ReactMarkdown children={markdown} />;
}

export default PdfViewerText;
