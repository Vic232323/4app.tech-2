<?php

/**
 * DefaultProviderCollection.php
 *
 * @package Embera
 * @author Michael Pratt <yo@michael-pratt.com>
 * @link   http://www.michael-pratt.com/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace DevOwl\RealCookieBanner\Vendor\Embera\ProviderCollection;

/**
 * Basically its a wrapper for the ProvidercollectionAdapter but defines the
 * default providers supported by the library
 * @internal
 */
class DefaultProviderCollection extends ProviderCollectionAdapter
{
    /** inline {@inheritdoc} */
    public function __construct(array $config = [])
    {
        parent::__construct($config);
        $this->registerProvider(['TwentyThreeHq', 'Acast', 'ActBlue', 'Adilo', 'Adways', 'Afreecatv', 'Altru', 'Altium', 'Animoto', 'AnnieMusic', 'Apester', 'Archivos', 'Assemblrworld', 'Audioboom', 'Audiocom', 'AudioClip', 'Audiomack', 'Audiomeans', 'BeautifulAI', 'Behance', 'BeamsFm', 'Biqnetwork', 'BlackfireIO', 'Blogcast', 'BlueskySocial', 'Bookingmood', 'Buttondown', 'Bumper', 'Bunny', 'Canva', 'Ceros', 'Celero', 'Chainflix', 'ChartBlocks', 'Chroco', 'CircuitLab', 'Clyp', 'CodeHS', 'Codepoints', 'CodeSandbox', 'Commaful', 'Coub', 'Crumbs', 'Cueup', 'Curated', 'Dadan', 'Datawrapper', 'DailyMotion', 'Dalexni', 'Deseretnews', 'Deviantart', 'Didacte', 'Digiteka', 'DocDroid', 'Docswell', 'DreamBroker', 'EchoesHQ', 'Embedery', 'Ethfiddle', 'EventLive', 'Everviz', 'Eyrie', 'Facebook', 'Fader', 'FaithLifeTV', 'Figma', 'Fitapp', 'FITE', 'Flickr', 'Flourish', 'FlowHubOrg', 'Framer', 'Fooday', 'Genially', 'GeographUk', 'GeographCI', 'GeographDE', 'GetShow', 'GettyImages', 'Giphy', 'GloriaTV', 'Gong', 'Gmetri', 'Grain', 'Gumlet', 'Gyazo', 'Hash', 'Hearthis', 'Heyzine', 'HiHaHo', 'HippoVideo', 'Hopvue', 'Huffduffer', 'Ideamapper', 'iFixit', 'IHeartRadio', 'Imgur', 'Infogram', 'Infoveave', 'Injurymap', 'InsightTimer', 'Instagram', 'InsticatorContentEngagementUnit', 'Issuu', 'ItemisCreate', 'Jovian', 'KakaoTV', 'Kickstarter', 'KirimEmail', 'Kit', 'Kurozora', 'Kooapp', 'Knacki', 'LearningApps', 'Libsyn', 'Lineplace', 'Livestream', 'LocalVoicesNetwork', 'Loom', 'LottieFiles', 'Ludus', 'Lumiere', 'Matterport', 'MediaLab', 'Mediastream', 'MedienArchivKuenste', 'MermaidInk', 'MicrosoftStream', 'Miro', 'MixCloud', 'Mixpanel', 'MusicboxManiacs', 'Namchey', 'Nanoo', 'NaturalAtlas', 'NDLA', 'NeetoRecord', 'Nfb', 'NFTndx', 'Odysee', 'OmnyStudio', 'OraTV', 'Orbitvu', 'Origits', 'Outplayed', 'OverflowIO', 'Pandavideo', 'Pastery', 'Piggy', 'Pikasso', 'Pinpoll', 'Pinterest', 'Pitchhub', 'Playbuzz', 'Plusdocs', 'Podbean', 'Polldaddy', 'Portfolium', 'Prezi', 'QTpi', 'RadioPublic', 'Rcvis', 'Reddit', 'ReleaseWire', 'Render', 'Replit', 'ReverbNation', 'RoosterTeeth', 'Rumble', 'RunKit', 'SapoVideos', 'ScreenNine', 'Screencast', 'ScribbleMaps', 'Scribd', 'SendToNews', 'Shopshare', 'Shoudio', 'ShowTheWay', 'Sketchfab', 'SlateApp', 'Slideshare', 'SmashNotes', 'Smeme', 'Smugmug', 'SocialExplorer', 'SongLink', 'SoundCloud', 'SpeakerDeck', 'Spotify', 'Spotlightr', 'Spreaker', 'SproutVideo', 'Spyke', 'StandfordDigitalRepository', 'Streamable', 'Streamio', 'Sudomemo', 'Sutori', 'Sway', 'Synthesia', 'Ted', 'TheNewYorkTimes', 'ThreeQ', 'Tickcounter', 'TikTok', 'Toornament', 'TonicAudio', 'Trackspace', 'TrinityAudio', 'Tumblr', 'Tuxx', 'Tvcf', 'Twinmotion', 'Twitter', 'UAPod', 'UniversitePantheonSorbonne', 'UniversityCambridgeMap', 'UpecPod', 'UstreamTV', 'Ustudio', 'Verse', 'VidMount', 'Videfit', 'Vidyard', 'Vimeo', 'Viously', 'Viostream', 'Vlipsy', 'VouchFor', 'WaveVideo', 'Wecandeo', 'Web3IsGoingJustGreat', 'WolframCloud', 'VoxSnap', 'Whimsical', 'Wistia', 'Wizer', 'Wokwi', 'Wordpress', 'Wordwall', 'Youtube', 'Yumpu', 'Zeplin', 'Zingsoft', 'Zoomable']);
    }
}
