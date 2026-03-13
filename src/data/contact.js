import linkedinLogo from '../assets/linkedin.avif'
import githubLogo from '../assets/github.png'
import leetcodeLogo from '../assets/leetcode.png'
import codeforcesLogo from '../assets/codeforces.png'
import codechefLogo from '../assets/codechef.avif'

export const contactInfo = {
  email: 'jay.maryland2023@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/jay-paun-baa8ab217/',
  github: 'https://github.com/Jay2704',
  leetcode: 'https://leetcode.com/u/ITS_HAMMER_TIME/',
  codeforces: 'https://codeforces.com/profile/DecodeR2704',
  codechef: 'https://www.codechef.com/users/decoder2704',
  location: 'Princeton, NJ',
  phone: '(667) 433-1441',
}

export const socialLinks = [
  { label: 'LinkedIn', href: contactInfo.linkedIn, logo: linkedinLogo },
  { label: 'GitHub', href: contactInfo.github, logo: githubLogo },
]

export const codingProfiles = [
  { label: 'LeetCode', href: contactInfo.leetcode, logo: leetcodeLogo, username: 'ITS_HAMMER_TIME' },
  { label: 'Codeforces', href: contactInfo.codeforces, logo: codeforcesLogo, username: 'DecodeR2704' },
  { label: 'CodeChef', href: contactInfo.codechef, logo: codechefLogo, username: 'decoder2704' },
]
