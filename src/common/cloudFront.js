import { cloudFrontDomain } from "@/common/constants";

export function serveArtistFromCloudFront(artist) {
  // change from S3 to CloudFront
  let s3Img = artist.img;
  let splitList1 = s3Img.split("kengamagjike2019");
  let finalURL1 = cloudFrontDomain + splitList1[1];
  let s3BgImg = artist.bgImg;
  let splitList2 = s3BgImg.split("kengamagjike2019");
  let finalURL2 = cloudFrontDomain + splitList2[1];
  // now mutate artist
  let artist2 = { ...artist };
  artist2.img = finalURL1;
  artist2.bgImg = finalURL2;
  return artist2;
}

export function serveJuryFromCloudFront(jury) {
  // change from S3 to CloudFront
  let s3Img = jury.img;
  let splitList1 = s3Img.split("kengamagjike2019");
  let finalURL1 = cloudFrontDomain + splitList1[1];
  let s3BgImg = jury.hoverImg;
  let splitList2 = s3BgImg.split("kengamagjike2019");
  let finalURL2 = cloudFrontDomain + splitList2[1];
  // now mutate jury
  let jury2 = { ...jury };
  jury2.img = finalURL1;
  jury2.hoverImg = finalURL2;
  return jury2;
}
