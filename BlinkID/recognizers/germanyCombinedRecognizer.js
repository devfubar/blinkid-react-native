import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for GermanyCombinedRecognizer.
 */
export class GermanyCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the German ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The CAN number of German ID. 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The date of birth of German ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of German ID owner 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of German ID owner 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The eye color of German ID owner. 
         */
        this.eyeColor = nativeResult.eyeColor;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the German ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The height of German ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The identity card number of German ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * The issuing authority of German ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of the German ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the German ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * German ID Combined Recognizer.
 * 
 * German ID Combined recognizer is used for scanning both front and back side of German ID.
 */
export class GermanyCombinedRecognizer extends Recognizer {
    constructor() {
        super('GermanyCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's address should be extracted from German ID
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether face image from ID card should be extracted
         * 
         *  
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new GermanyCombinedRecognizerResult(nativeResult); }
    }
}