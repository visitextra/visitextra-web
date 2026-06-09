import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { GlobalContextProviders } from "./components/_globalContextProviders";
import Page_0 from "./pages/faq.tsx";
import PageLayout_0 from "./pages/faq.pageLayout.tsx";
import Page_1 from "./pages/about.tsx";
import PageLayout_1 from "./pages/about.pageLayout.tsx";
import Page_2 from "./pages/_index.tsx";
import PageLayout_2 from "./pages/_index.pageLayout.tsx";
import Page_3 from "./pages/contact.tsx";
import PageLayout_3 from "./pages/contact.pageLayout.tsx";
import Page_4 from "./pages/partnerships.tsx";
import PageLayout_4 from "./pages/partnerships.pageLayout.tsx";
import Page_5 from "./pages/driver-register.tsx";
import PageLayout_5 from "./pages/driver-register.pageLayout.tsx";
import Page_6 from "./pages/cookie-policy.tsx";
import PageLayout_6 from "./pages/cookie-policy.pageLayout.tsx";
import Page_7 from "./pages/privacy-policy.tsx";
import PageLayout_7 from "./pages/privacy-policy.pageLayout.tsx";
import Page_8 from "./pages/terms-of-use.tsx";
import PageLayout_8 from "./pages/terms-of-use.pageLayout.tsx";
import Page_9 from "./pages/kvkk-clarification.tsx";
import PageLayout_9 from "./pages/kvkk-clarification.pageLayout.tsx";
import Page_10 from "./pages/passenger-agreement.tsx";
import PageLayout_10 from "./pages/passenger-agreement.pageLayout.tsx";
import Page_11 from "./pages/driver-agreement.tsx";
import PageLayout_11 from "./pages/driver-agreement.pageLayout.tsx";

if (!window.requestIdleCallback) {
  window.requestIdleCallback = (cb) => {
    setTimeout(cb, 1);
  };
}

import "./base.css";

const fileNameToRoute = new Map([
  ["./pages/faq.tsx","/faq"],
  ["./pages/about.tsx","/about"],
  ["./pages/_index.tsx","/"],
  ["./pages/contact.tsx","/contact"],
  ["./pages/partnerships.tsx","/partnerships"],
  ["./pages/driver-register.tsx","/driver-register"],
  ["./pages/cookie-policy.tsx","/cookie-policy"],
  ["./pages/privacy-policy.tsx","/privacy-policy"],
  ["./pages/terms-of-use.tsx","/terms-of-use"],
  ["./pages/kvkk-clarification.tsx","/kvkk-clarification"],
  ["./pages/passenger-agreement.tsx","/passenger-agreement"],
  ["./pages/driver-agreement.tsx","/driver-agreement"]
]);
const fileNameToComponent = new Map([
  ["./pages/faq.tsx", Page_0],
  ["./pages/about.tsx", Page_1],
  ["./pages/_index.tsx", Page_2],
  ["./pages/contact.tsx", Page_3],
  ["./pages/partnerships.tsx", Page_4],
  ["./pages/driver-register.tsx", Page_5],
  ["./pages/cookie-policy.tsx", Page_6],
  ["./pages/privacy-policy.tsx", Page_7],
  ["./pages/terms-of-use.tsx", Page_8],
  ["./pages/kvkk-clarification.tsx", Page_9],
  ["./pages/passenger-agreement.tsx", Page_10],
  ["./pages/driver-agreement.tsx", Page_11],
]);

function makePageRoute(filename: string) {
  const Component = fileNameToComponent.get(filename);
  return <Component />;
}

function toElement({
  trie,
  fileNameToRoute,
  makePageRoute,
}: {
  trie: LayoutTrie;
  fileNameToRoute: Map<string, string>;
  makePageRoute: (filename: string) => React.ReactNode;
}) {
  return [
    ...trie.topLevel.map((filename) => (
      <Route
        key={fileNameToRoute.get(filename)}
        path={fileNameToRoute.get(filename)}
        element={makePageRoute(filename)}
      />
    )),
    ...Array.from(trie.trie.entries()).map(([Component, child], index) => (
      <Route
        key={index}
        element={
          <Component>
            <Outlet />
          </Component>
        }
      >
        {toElement({ trie: child, fileNameToRoute, makePageRoute })}
      </Route>
    )),
  ];
}

type LayoutTrieNode = Map<
  React.ComponentType<{ children: React.ReactNode }>,
  LayoutTrie
>;
type LayoutTrie = { topLevel: string[]; trie: LayoutTrieNode };
function buildLayoutTrie(layouts: {
  [fileName: string]: React.ComponentType<{ children: React.ReactNode }>[];
}): LayoutTrie {
  const result: LayoutTrie = { topLevel: [], trie: new Map() };
  Object.entries(layouts).forEach(([fileName, components]) => {
    let cur: LayoutTrie = result;
    for (const component of components) {
      if (!cur.trie.has(component)) {
        cur.trie.set(component, {
          topLevel: [],
          trie: new Map(),
        });
      }
      cur = cur.trie.get(component)!;
    }
    cur.topLevel.push(fileName);
  });
  return result;
}

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Go back to the <a href="/" style={{ color: 'blue' }}>home page</a>.</p>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <GlobalContextProviders>
        <Routes>
          {toElement({ trie: buildLayoutTrie({
"./pages/faq.tsx": PageLayout_0,
"./pages/about.tsx": PageLayout_1,
"./pages/_index.tsx": PageLayout_2,
"./pages/contact.tsx": PageLayout_3,
"./pages/partnerships.tsx": PageLayout_4,
"./pages/driver-register.tsx": PageLayout_5,
"./pages/cookie-policy.tsx": PageLayout_6,
"./pages/privacy-policy.tsx": PageLayout_7,
"./pages/terms-of-use.tsx": PageLayout_8,
"./pages/kvkk-clarification.tsx": PageLayout_9,
"./pages/passenger-agreement.tsx": PageLayout_10,
"./pages/driver-agreement.tsx": PageLayout_11,
}), fileNameToRoute, makePageRoute })} 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProviders>
    </BrowserRouter>
  );
}
