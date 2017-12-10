import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";

/**
 * GET /login
 * Login page.
 */
export let getLogin = (req: Request, res: Response) => {
  res.jsonp({
    code: 200,
    messeage: "Test"
  });
};