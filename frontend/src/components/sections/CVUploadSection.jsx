import React, { useState, useCallback, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Upload, FileText, CheckCircle, Trash2, Shield } from 'lucide-react';

const CVUploadSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].cvUpload;
  const [ref, isVisible] = useScrollReveal();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);

  const validTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  const maxSize = 10 * 1024 * 1024;

  const handleFile = useCallback(
    (selectedFile) => {
      if (!validTypes.includes(selectedFile.type)) {
        toast.error('Invalid file type. Please upload PDF or DOC/DOCX.');
        return;
      }
      if (selectedFile.size > maxSize) {
        toast.error('File too large. Maximum size is 10MB.');
        return;
      }
      setFile(selectedFile);
      setUploadComplete(false);
      setTerminalOutput([]);

      // Mock upload with terminal output
      setUploading(true);
      setProgress(0);

      const steps = [
        { at: 0, msg: 'Initializing secure connection...' },
        { at: 20, msg: 'Encrypting file with AES-256...' },
        { at: 50, msg: 'Uploading encrypted payload...' },
        { at: 80, msg: 'Verifying file integrity...' }
      ];
      let prog = 0;
      const interval = setInterval(() => {
        prog += Math.random() * 12 + 4;
        if (prog >= 100) {
          prog = 100;
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);
          setProgress(100);
          setTerminalOutput((prev) => [...prev, 'Upload complete. File secured.']);
          toast.success(data.success);
        } else {
          setProgress(Math.min(prog, 99));
          const step = steps.find((s) => prog >= s.at && prog < s.at + 14);
          if (step) {
            setTerminalOutput((prev) => {
              if (!prev.includes(step.msg)) return [...prev, step.msg];
              return prev;
            });
          }
        }
      }, 180);
    },
    [data.success]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) handleFile(droppedFile);
    },
    [handleFile]
  );

  const handleRemove = () => {
    setFile(null);
    setUploadComplete(false);
    setProgress(0);
    setTerminalOutput([]);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <section id="cv-upload" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
          <p className="font-mono text-sm text-[#8b949e] mt-4">{data.description}</p>
        </div>

        <Card
          className={`bg-[#0d1117]/60 border-[#1e2a3a] p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center cursor-pointer transition-colors duration-300 ${
                isDragging
                  ? 'border-[#00ff41] bg-[#00ff41]/5'
                  : 'border-[#1e2a3a] hover:border-[#00ff41]/50 hover:bg-[#00ff41]/[0.02]'
              }`}
            >
              <Upload
                className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 transition-colors duration-300 ${
                  isDragging ? 'text-[#00ff41]' : 'text-[#8b949e]'
                }`}
              />
              <p className="font-mono text-sm sm:text-base text-[#c9d1d9] mb-2">{data.dragText}</p>
              <p className="font-mono text-sm text-[#8b949e] mb-4">{data.orText}</p>
              <Button className="bg-transparent border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 font-mono text-sm">
                {data.browseText}
              </Button>
              <p className="font-mono text-xs text-[#8b949e]/50 mt-4">{data.supportedFormats}</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-4">
              {/* File Info */}
              <div className="flex items-center gap-4 p-4 bg-[#161b22] rounded border border-[#1e2a3a]">
                <FileText className="w-8 h-8 text-[#00ff41] shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm text-[#c9d1d9] truncate">{file.name}</p>
                  <p className="font-mono text-xs text-[#8b949e]">{formatSize(file.size)}</p>
                </div>
                {uploadComplete && <CheckCircle className="w-5 h-5 text-[#00ff41] shrink-0" />}
              </div>

              {/* Progress */}
              {uploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-[#00ff41] animate-pulse" />
                      <span className="font-mono text-xs text-[#00ff41]">{data.uploading}</span>
                    </div>
                    <span className="font-mono text-xs text-[#8b949e]">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-[#1e2a3a] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #00ff41, #00d4ff)',
                        boxShadow: '0 0 8px rgba(0, 255, 65, 0.3)',
                        transition: 'width 0.2s ease'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Terminal Output */}
              {terminalOutput.length > 0 && (
                <div className="bg-[#0a0a0f] rounded p-3 font-mono text-xs text-[#8b949e] space-y-1">
                  {terminalOutput.map((line, i) => (
                    <p key={i}>
                      <span className="text-[#00ff41]">$</span> {line}
                    </p>
                  ))}
                </div>
              )}

              {uploadComplete && (
                <div className="bg-[#0a0a0f] rounded p-3 font-mono text-xs space-y-1">
                  <p className="text-[#00ff41]">✓ {data.success}</p>
                  <p className="text-[#8b949e] break-all">
                    SHA-256: {Array.from({ length: 8 }, () => Math.random().toString(16).substr(2, 8)).join('')}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleRemove}
                  variant="outline"
                  className="font-mono text-sm border-[#ff5f57]/30 text-[#ff5f57] hover:bg-[#ff5f57]/10 bg-transparent gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  {data.remove}
                </Button>
                {uploadComplete && (
                  <Button
                    onClick={handleRemove}
                    className="font-mono text-sm bg-transparent border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {data.uploadAnother}
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default CVUploadSection;
