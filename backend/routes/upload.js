// // routes/upload.js
// import express from "express";
// import multer from "multer";
// import cloudinary from "../cloudinary.js";
// import fs from "fs";

// const router = express.Router();

// // Use multer to handle file uploads
// const upload = multer({ dest: "uploads/" }); // temporarily stores file locally

// // Upload photo
// router.post("/photo", upload.single("file"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: "user_uploads/photo",
//       resource_type: "image",
//     });

//     fs.unlinkSync(req.file.path); // remove local file
//     res.status(200).json({ url: result.secure_url });
//   } catch (err) {
//     console.error("Photo Upload Error:", err);
//     res.status(500).json({ message: "Photo upload failed" });
//   }
// });

// // Upload resume
// router.post("/resume", upload.single("file"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: "user_uploads/resume",
//       resource_type: "raw", // PDF or DOCX
//     });

//     fs.unlinkSync(req.file.path); // remove local file
//     res.status(200).json({ url: result.secure_url });
//   } catch (err) {
//     console.error("Resume Upload Error:", err);
//     res.status(500).json({ message: "Resume upload failed" });
//   }
// });

// export default router;


// upload.js
import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../cloudinary.js";

const router = express.Router();

// ✅ For photo upload (images only)
const photoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "user_uploads/photos",
    resource_type: "image",
    
    public_id: (req, file) => {
  const originalName = file.originalname.replace(/\.[^/.]+$/, ""); // remove extension
  const safeName = originalName.replace(/\s+/g, "_").replace(/[^\w\-]/g, ""); // sanitize
  return `${safeName}_${new Date(Date.now())}`;
}
  }
});

// ✅ For resume upload (PDF/DOC/DOCX)
const resumeStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    
    folder: "user_uploads/resumes",
    resource_type: "auto", 
    public_id: (req, file) => {
  const originalName = file.originalname.replace(/\.[^/.]+$/, ""); // remove extension
  const safeName = originalName.replace(/\s+/g, "_").replace(/[^\w\-]/g, ""); // sanitize
  return `${safeName}_${new Date(Date.now())}`;
}
  }
});

const uploadPhoto = multer({ storage: photoStorage });
const uploadResume = multer({ storage: resumeStorage });

// Photo Upload Endpoint
router.post("/photo", uploadPhoto.single("file"),
(req, res) => {
  console.log("📸 Uploaded Photo:", req.file);
  res.json({ url: req.file.path });
}
);

// Resume Upload Endpoint
router.post("/resume", uploadResume.single("file"), 
(req, res) => {
  console.log("📄 Uploaded Resume:", req.file);
  res.json({ url: req.file.path });
});

export default router;
