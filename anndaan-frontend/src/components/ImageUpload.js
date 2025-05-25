import { useDropzone } from 'react-dropzone';

function ImageUpload({ onUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: acceptedFiles => {
      onUpload(acceptedFiles[0]);
    }
  });

  return (
    <div {...getRootProps()} className="border p-3 rounded bg-light text-center">
      <input {...getInputProps()} />
      <p>📷 Drag & drop or click to upload food photo</p>
    </div>
  );
}

export default ImageUpload;
