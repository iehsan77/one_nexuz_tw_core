"use client";
import Cropper from "react-easy-crop";
import { useState, useCallback } from "react";
import { getCroppedImg } from "@/utils/cropImage";
import Slider from "./Slider";

export default function ImageEditorModal({ imageSrc, open, onClose, onSave }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
        flipHorizontal,
        flipVertical
      );
      onSave(croppedImage);
    } catch (e) {
      console.error("Error cropping image", e);
    }
  }, [
    imageSrc,
    croppedAreaPixels,
    rotation,
    flipHorizontal,
    flipVertical,
    onSave,
  ]);

  const handleReset = useCallback(() => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90vw] h-[80vh] max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        <div className="relative flex-1">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            cropShape="round"
            showGrid={false}
            flipHorizontal={flipHorizontal}
            flipVertical={flipVertical}
          />
        </div>

        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-1">
                Zoom
              </label>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e) => setZoom(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-dark mb-1">
                Rotation
              </label>
              <Slider
                value={rotation}
                min={0}
                max={360}
                onChange={(e) => setRotation(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-1 rounded-md bg-gray-100 text-gray-dark">
              Reset
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-md"
              onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-600 hover:bg-primary text-white px-6 py-2 rounded-md"
              onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
