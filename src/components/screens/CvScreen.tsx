import { FooterComponent } from "../FooterComponent";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import cvPdf from './../../assets/CV_Justin.pdf';
import { CloseComponent } from "../CloseComponent";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function CvScreen(){
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
    }
    return (
        <div className="w-full h-screen flex flex-col bg-[#f3f3f3] overflow-hidden">
      <div className="w-full h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm select-none">
        <div className="text-sm font-medium truncate w-1/4">CV_JustinVanLeuvenum.pdf</div>
        
        {/* PDF Controls */}
        <div className="flex items-center gap-4 bg-gray-100 px-3 py-1 rounded-md">
          <button 
            disabled={pageNumber <= 1} 
            onClick={() => setPageNumber(prev => prev - 1)}
            className="text-sm disabled:opacity-30 p-1 hover:bg-gray-200 rounded"
          >
            Previous
          </button>
          <span className="text-xs">Page {pageNumber} to {numPages || '?'}</span>
          <button 
            disabled={pageNumber >= (numPages || 1)} 
            onClick={() => setPageNumber(prev => prev + 1)}
            className="text-sm disabled:opacity-30 p-1 hover:bg-gray-200 rounded"
          >
            Next
          </button>
          
          <div className="h-4 w-[1px] bg-gray-300" />
          <button onClick={() => setScale(s => s + 0.1)} className="text-sm p-1 hover:bg-gray-200 rounded">Zoom +</button>
          <button onClick={() => setScale(s => s - 0.1)} className="text-sm p-1 hover:bg-gray-200 rounded">Zoom -</button>
        </div>

        <div className="w-1/7" />
        <CloseComponent/>
      </div>

      <div className="flex-1 overflow-auto bg-[#525659] p-4 flex justify-center items-start">
        <div className="shadow-2xl bg-white">
          <Document
            file={cvPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-white p-4">CV loading...</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale} 
              renderTextLayer={false} // beter performance
              renderAnnotationLayer={false} // no purple boxes
            />
          </Document>
        </div>
      </div>
      <FooterComponent/>
    </div>  
    );
}