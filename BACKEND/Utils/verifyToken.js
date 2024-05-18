import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
//   console.log(token);

  if (!token) {
    return next(createError(401, "You are not Authenticated"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Invalid Error"));
    }
    req.admin = user;
    // console.log(req.admin.admin, "====>>>> req.admin from token");
    // console.log(user, "====>>>> req.admin from token");
    next();
  });
};


export const verifySuperAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.superAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}

export const verifyInvoiceAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req);
        if (req.admin && req.admin.admin && req.admin.admin.invoiceAdmin === true) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyAppointmentAdmin = (req, res, next) => {
    verifyToken(req, res,  () => {
        console.log(req.admin.admin.appointmentAdmin);
        if (req.admin.admin.appointmentAdmin === true) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyPatientAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.patientAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyPhysicianAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.physicianAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyProductAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.productAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifySlidingBannerAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.slidingBannerAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}

export const verifyServiceAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.serviceAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}

export const verifyTeamMemberAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.teamMemberAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyFaqsAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.faqsAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyTestimonialAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.testimonialAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


export const verifyContentPageAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.admin.contentPageAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}


