import { cloudFrontDomain, albumBucketName } from "@/common/constants";

export function serveArtistFromCloudFront(artist) {
  // change from S3 to CloudFront
  let s3Img = artist.img;
  let splitList1 = s3Img.split(albumBucketName);
  let finalURL1 = cloudFrontDomain + splitList1[1];
  let s3BgImg = artist.bgImg;
  let splitList2 = s3BgImg.split(albumBucketName);
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
  let splitList1 = s3Img.split(albumBucketName);
  let finalURL1 = cloudFrontDomain + splitList1[1];
  let s3BgImg = jury.hoverImg;
  let splitList2 = s3BgImg.split(albumBucketName);
  let finalURL2 = cloudFrontDomain + splitList2[1];
  // now mutate jury
  let jury2 = { ...jury };
  jury2.img = finalURL1;
  jury2.hoverImg = finalURL2;
  return jury2;
}

export function serveBlogFromCloudFront(blog) {
  // change from S3 to CloudFront
  // first image
  let s3Img1 = blog.img;
  let splitList1 = s3Img1.split(albumBucketName);
  let finalURL1 = cloudFrontDomain + splitList1[1];
  let finalURL2 = ""
  let finalURL3 = ""
  // second image
  if (blog.img2) {

    let s3Img2 = blog.img2;
    let splitList2 = s3Img2.split(albumBucketName);
    finalURL2 = cloudFrontDomain + splitList2[1];
  }
  // third image
  if (blog.img3) {

    let s3Img3 = blog.img3;
    let splitList3 = s3Img3.split(albumBucketName);
    finalURL3 = cloudFrontDomain + splitList3[1];
  }


  // now mutate blog
  let blog2 = { ...blog };
  blog2.img = finalURL1;
  blog2.img2 = finalURL2;
  blog2.img3 = finalURL3;
  return blog2;
}
