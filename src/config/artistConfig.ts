import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "ChevyGurl",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-video.mp4",
  heroImage: "/hero-poster.jpg",
  profileImage: "/hero-poster.jpg",

  // ============================================================
  // SOCIALS & STREAMING LINKS
  // ============================================================
  socials: [
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/iamchevygurl",
      label: "Instagram"
    },
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/3HIgjBZMg11WljxA2dW1kF",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/chevygurl/1027124818",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://www.youtube.com/@chevygurl",
      label: "YouTube"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@iamchevygurl",
      label: "TikTok"
    },
    {
      id: "soundcloud",
      platform: "soundcloud",
      url: "https://soundcloud.com/chevygurl",
      label: "SoundCloud",
      isStreaming: true
    },
    {
      id: "twitter",
      platform: "twitter",
      url: "https://twitter.com/IAmChevyGurl",
      label: "Twitter"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "wulfszn",
          title: "WULFSZN",
          type: "album",
          releaseDate: "June 26, 2026",
          coverArt: "/covers/wulfszn.jpg",
          tracks: [
            {
              id: "wulfszn-1",
              title: "Intro",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/f3/4d/e3f34db8-f9bd-e206-7ba8-575847159bc6/mzaf_15832013638775724107.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-2",
              title: "Ridah",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/35/95/6f/35956ff8-6a1c-3ef0-35ae-1657fc1aaf72/mzaf_1036925484192111173.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-3",
              title: "Up the Smoke",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/56/f3/eb/56f3ebfc-5cfe-02a8-0af8-474d85757d34/mzaf_15236974758482312702.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-4",
              title: "Yep",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bd/3c/c5/bd3cc5ff-611e-9011-2b75-2f2985d80fc5/mzaf_3719978732239793394.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-5",
              title: "Geek'd up (Radio Mix)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/71/ea/f171eae8-5849-47b5-6ace-dd645e73e4c0/mzaf_12114692611455482524.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-6",
              title: "Congratulations: Wulfszn",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/87/ee/8b87ee35-6325-524e-7c0e-90d96801ddeb/mzaf_10347387729462480759.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-7",
              title: "Catching Waves",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/63/a2/89/63a28973-3faf-a24d-e6ef-cdd8cb8179ee/mzaf_363205403323185879.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-8",
              title: "Body 4 Body",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/99/71/59/9971591a-94db-8328-ec43-2cb132c345a5/mzaf_11964079608514660356.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-9",
              title: "Psycho (feat. Rin)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ef/46/6e/ef466eba-f905-6a4b-3ca5-379d4949f791/mzaf_9728483329833237893.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-10",
              title: "Count It Up",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0b/56/d7/0b56d78a-86c0-7799-9c6d-ecdcddfb044b/mzaf_14221295469166575339.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-11",
              title: "Wulfszn (feat. Jay Asesino & YZM)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7b/5a/15/7b5a157f-6eaa-f405-bbbf-8dd4ee730926/mzaf_4992092941685193754.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-12",
              title: "Geek'd up (Club Mix)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cd/e5/15/cde515da-0913-9dee-0fec-bd68619a9717/mzaf_3401659617522870541.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-13",
              title: "Congratulations: Tuneszn (feat. Tune Da Poet)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/da/ac/81/daac813e-3c5f-5aa4-f756-0d15a8ad684e/mzaf_7065609174048973957.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-14",
              title: "Congratulations: Dunkszn (feat. Rich Dunk)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3c/ad/8d/3cad8d66-0d2b-4c7a-3945-8e536866647e/mzaf_16004145087765218900.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-15",
              title: "Congratulations: Jayszn (feat. Jay Asesino)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/09/29/190929cf-bc76-e0dc-4d13-e0daed4b3ad9/mzaf_18217735732486888564.plus.aac.p.m4a"
            },
            {
              id: "wulfszn-16",
              title: "Congratulations: Kayszn (feat. Kay Lion)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/d4/df/99d4df5c-afcd-f1cd-6d96-eac0d63c8e06/mzaf_5595367282356755151.plus.aac.p.m4a"
            }
          ],
          spotifyUrl: "https://open.spotify.com/album/79nsVV2jeDHPVpy14jBgOq",
          appleMusicUrl: "https://music.apple.com/us/album/wulfszn/6778095921",
          youtubeMusicUrl: "https://music.youtube.com/playlist?list=OLAK5uy_lZvWKKTTAsc6tD-klI8JxeVwzNu_IXHpQ",
          youtubeUrl: "https://www.youtube.com/watch?v=Cpyjc45Ysr0",
          amazonMusicUrl: "https://music.amazon.com/albums/B0H4HPF5L3",
          deezerUrl: "https://www.deezer.com/album/1000512831",
          tidalUrl: "https://listen.tidal.com/album/531727390",
          pandoraUrl: "https://www.pandora.com/AL:67201407",
          iheartUrl: "https://www.iheart.com/artist/chevygurl-31543158/albums/wulfszn-407813391/",
          itunesUrl: "https://geo.music.apple.com/us/album/_/6778095921?mt=1&app=itunes&ls=1",
          songlinkUrl: "https://album.link/i/6778095921"
        },
        {
          id: "catching-waves",
          title: "Catching Waves",
          type: "single",
          releaseDate: "January 16, 2026",
          coverArt: "/covers/catching-waves.jpg",
          tracks: [
            {
              id: "catching-waves-1",
              title: "Catching Waves",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/79/ca/0879cac6-92ac-4055-4700-96b4f120240e/mzaf_13774830392370247015.plus.aac.p.m4a"
            }
          ],
          spotifyUrl: "https://open.spotify.com/album/6Ip17EElnRVli8cyf9QtLc",
          appleMusicUrl: "https://music.apple.com/us/album/catching-waves-single/1867335253",
          youtubeMusicUrl: "https://music.youtube.com/playlist?list=OLAK5uy_lqYZywWOg9YEIlttwWZfJXpW1NzABRTCA",
          youtubeUrl: "https://www.youtube.com/watch?v=tnmkZzyTW5c",
          amazonMusicUrl: "https://music.amazon.com/albums/B0GFGTSF4L",
          deezerUrl: "https://www.deezer.com/album/893778722",
          tidalUrl: "https://listen.tidal.com/track/487994941",
          pandoraUrl: "https://www.pandora.com/TR:206984549",
          iheartUrl: "https://www.iheart.com/artist/chevygurl-31543158/albums/catching-waves-372087472/",
          itunesUrl: "https://geo.music.apple.com/us/album/_/1867335253?i=1867335254&mt=1&app=itunes&ls=1",
          songlinkUrl: "https://song.link/i/1867335254"
        },
        {
          id: "yep",
          title: "Yep",
          type: "single",
          releaseDate: "October 24, 2025",
          coverArt: "/covers/yep.jpg",
          tracks: [
            {
              id: "yep-1",
              title: "Yep",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/a8/7e/42a87e84-c627-c0a8-5095-5125a4032a8e/mzaf_9028160205847607970.plus.aac.p.m4a"
            }
          ],
          spotifyUrl: "https://open.spotify.com/album/3qQujMoJ3M0Feg50yDUsWB",
          appleMusicUrl: "https://music.apple.com/us/album/yep-single/1843908337",
          youtubeMusicUrl: "https://music.youtube.com/playlist?list=OLAK5uy_n4PsgJQDdF9LFGZm6xXeOLN8hBUfvKVnU",
          youtubeUrl: "https://www.youtube.com/watch?v=UHt20ru6mMA",
          amazonMusicUrl: "https://music.amazon.com/albums/B0FTTB4YTN",
          deezerUrl: "https://www.deezer.com/album/832484651",
          tidalUrl: "https://listen.tidal.com/track/464713400",
          pandoraUrl: "https://www.pandora.com/TR:206984546",
          iheartUrl: "https://www.iheart.com/artist/chevygurl-31543158/albums/yep-353482003/",
          itunesUrl: "https://geo.music.apple.com/us/album/_/1843908337?i=1843908339&mt=1&app=itunes&ls=1",
          songlinkUrl: "https://song.link/i/1843908339"
        },
        {
          id: "gangsta-rap-made-me-do-it",
          title: "Gangsta Rap Made Me Do It",
          type: "ep",
          releaseDate: "February 17, 2023",
          coverArt: "/covers/gangsta-rap-made-me-do-it.jpg",
          tracks: [
            {
              id: "track-1666767587",
              title: "Clap at Em",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/dd/e5/83/dde58333-5097-14dc-3eae-d7a2eb91cb6d/mzaf_7669920970399519250.plus.aac.p.m4a"
            },
            {
              id: "track-1666767616",
              title: "I’m Good",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d0/10/de/d010def8-1328-3140-6cf9-47d0eaae48db/mzaf_7254743779022146623.plus.aac.p.m4a"
            },
            {
              id: "track-1666767646",
              title: "See Me Fall",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d1/e7/93/d1e793b8-66a0-19c8-eb84-e2a2b8d772f1/mzaf_5028476385885926554.plus.aac.p.m4a"
            },
            {
              id: "track-1666767647",
              title: "Same Friends",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/03/8e/96/038e9664-2b9b-81ce-8960-178b03059d5e/mzaf_11193674781586069205.plus.aac.p.m4a"
            },
            {
              id: "track-1666767648",
              title: "We Made It",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/45/a4/72/45a4721e-094c-4f16-d851-115a88abf9e1/mzaf_1312175533482143980.plus.aac.p.m4a"
            }
          ],
          spotifyUrl: "https://open.spotify.com/album/7IPzvi7E1QvE7LpS8QajHF",
          appleMusicUrl: "https://music.apple.com/us/album/gangsta-rap-made-me-do-it-ep/1666767586",
          youtubeMusicUrl: "https://music.youtube.com/playlist?list=OLAK5uy_lkStfUmt_ln0vQHqmXRC7N6XKO3fmDUDA",
          youtubeUrl: "https://www.youtube.com/playlist?list=OLAK5uy_lkStfUmt_ln0vQHqmXRC7N6XKO3fmDUDA",
          deezerUrl: "https://www.deezer.com/album/398641207",
          tidalUrl: "https://listen.tidal.com/album/272226775",
          amazonMusicUrl: "https://music.amazon.com/albums/B0BSN5LCLK",
          pandoraUrl: "https://www.pandora.com/artist/chevygurl/gangsta-rap-made-me-do-it/AL9JpVwg6v5b6X4",
          iheartUrl: "https://www.iheart.com/artist/chevygurl-31543158/albums/gangsta-rap-made-me-do-it-200467571/",
          itunesUrl: "https://itunes.apple.com/us/album/gangsta-rap-made-me-do-it-ep/1666767586",
          songlinkUrl: "https://album.link/i/1666767586"
        },
        {
          id: "skinny-jeans",
          title: "Skinny Jeans (feat. Sada James)",
          type: "single",
          releaseDate: "January 1, 2017",
          coverArt: "/covers/skinny-jeans.jpg",
          tracks: [
            {
              id: "track-1190939399",
              title: "Skinny Jeans (feat. Sada James)",
              previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview111/v4/45/2d/34/452d3435-275e-3acb-4f3a-ad4eda2f6929/mzaf_6680970633589128090.plus.aac.p.m4a"
            }
          ],
          appleMusicUrl: "https://music.apple.com/us/album/skinny-jeans-feat-sada-james/1190939232?i=1190939399",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=Z1ZJ4h4EgRA",
          youtubeUrl: "https://www.youtube.com/watch?v=Z1ZJ4h4EgRA",
          tidalUrl: "https://listen.tidal.com/album/72148407",
          amazonMusicUrl: "https://music.amazon.com/albums/B01N6M5WHZ?trackAsin=B01N0W5UQC",
          pandoraUrl: "https://www.pandora.com/artist/chevygurl/skinny-jeans-feat-sada-james/skinny-jeans-feat-sada-james/TRmx5xdbbJ6mpf4",
          iheartUrl: "https://www.iheart.com/artist/chevygurl-31543158/albums/skinny-jeans-feat-sada-james-46134959/",
          itunesUrl: "https://itunes.apple.com/us/album/skinny-jeans-feat-sada-james-single/1190939232",
          songlinkUrl: "https://song.link/i/1190939399"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "video-1",
          title: "WULFSZN ft. Jay Asesino & YZM (OFFICIAL MUSIC VIDEO)",
          youtubeId: "Cpyjc45Ysr0",
          thumbnail: "https://img.youtube.com/vi/Cpyjc45Ysr0/maxresdefault.jpg"
        },
        {
          id: "video-2",
          title: "CONGRATULTIONS: KAYSZN LYRIC VIDEO",
          youtubeId: "nGypeh2rH78",
          thumbnail: "https://img.youtube.com/vi/nGypeh2rH78/maxresdefault.jpg"
        },
        {
          id: "video-3",
          title: "CONGRATULATIONS: JAYSZN LYRIC VIDEO",
          youtubeId: "c53_3nVfVko",
          thumbnail: "https://img.youtube.com/vi/c53_3nVfVko/maxresdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
