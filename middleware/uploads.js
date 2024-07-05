import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const remoteUploads = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: '/event-api/*'
  })

})




// 1212 | dAZ1xH7cfArudJcqtnkwKPIam2U4YEJ0g1TKKK2H