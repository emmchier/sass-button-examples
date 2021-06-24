const containedCode = 
    `
    .customBtn {
        width: auto;
        height: auto;
        display: inline-block;
        border-radius: 5px !important;
        border: none !important;
        background-color: #cfd2d3 !important;
        color: #212121;
        padding: 10px 30px;
        font-size: 1rem;
        position: relative;
        overflow: hidden;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        z-index: 1;
        cursor: pointer;
        vertical-align: middle;
    }

    .customBtn__contained {
        background-color: #6223EE !important;
        border: none !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
    }
    .customBtn__contained:hover {
        background-color: #3b08aa !important;
        border: none !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
    }
    .customBtn__contained:focus {
        background-color: #7e49f1 !important;
        border: none !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
    }
      
    .customBtn__contained--small {
        padding: 5px 15px !important;
        font-size: 0.8rem !important;
    }
      
    .customBtn__contained--medium {
        padding: 10px 30px !important;
        font-size: 1.1rem !important;
    }
      
    .customBtn__contained--large {
        padding: 12px 42px !important;
        font-size: 1.3rem !important;
    }`;

const outlinedCode = 
    `
    .customBtn {
        width: auto;
        height: auto;
        display: inline-block;
        border-radius: 5px !important;
        border: none !important;
        background-color: #cfd2d3 !important;
        color: #212121;
        padding: 10px 30px;
        font-size: 1rem;
        position: relative;
        overflow: hidden;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        z-index: 1;
        cursor: pointer;
        vertical-align: middle;
    }

    .customBtn__outlined {
        background-color: transparent !important;
        border: 1px solid #6223EE !important;
        color: #6223EE !important;
        text-decoration: none !important;
    }

    .customBtn__outlined:hover {
        background-color: #6223EE !important;
        border: 1px solid #6223EE !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
    }

    .customBtn__outlined:focus {
        background-color: #d6d3d3 !important;
        border: 1px solid #6223EE !important;
        color: #6223EE !important;
        text-decoration: none !important;
    }
      
    .customBtn__outlined--small {
        padding: 5px 15px !important;
        font-size: 0.8rem !important;
    }
      
    .customBtn__outlined--medium {
        padding: 10px 30px !important;
        font-size: 1.1rem !important;
    }
      
    .customBtn__outlined--large {
        padding: 12px 42px !important;
        font-size: 1.3rem !important;
    }`;

const textCode = 
    `
    .customBtn {
        width: auto;
        height: auto;
        display: inline-block;
        border-radius: 5px !important;
        border: none !important;
        background-color: #cfd2d3 !important;
        color: #212121;
        padding: 10px 30px;
        font-size: 1rem;
        position: relative;
        overflow: hidden;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        z-index: 1;
        cursor: pointer;
        vertical-align: middle;
    }

    .customBtn__text {
        background-color: transparent !important;
        border: none !important;
        color: #212121 !important;
        text-decoration: none !important;
    }

    .customBtn__text:hover {
        background-color: transparent !important;
        border: none !important;
        color: #3b08aa !important;
        text-decoration: underline !important;
    }

    .customBtn__text:focus {
        background-color: transparent !important;
        border: none !important;
        color: #7e49f1 !important;
        text-decoration: none !important;
    }
      
    .customBtn__text--small {
        font-size: 0.8rem !important;
    }
      
    .customBtn__text--medium {
        font-size: 1.1rem !important;
    }
      
    .customBtn__text--large {
        font-size: 1.69rem !important;
    }`;

const fabCode = 
    `
    .customBtn__fab {
        width: 55px;
        height: 55px;
        border-radius: 50% !important;
        background-color: #6223EE !important;
        padding: 0 !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center !important;
            -ms-flex-align: center !important;
                align-items: center !important;
        -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
                justify-content: center !important;
    }

    .customBtn__fab {
        -webkit-box-shadow: 0 8px 17px 2px rgba(71, 69, 69, 0.069), 
                            0 3px 14px 2px rgba(71, 69, 69, 0.069), 
                            0 5px 5px -3px rgba(107, 35, 35, 0.069);
                box-shadow: 0 8px 17px 2px rgba(71, 69, 69, 0.069), 
                            0 3px 14px 2px rgba(71, 69, 69, 0.069), 
                            0 5px 5px -3px rgba(107, 35, 35, 0.069);
    }

    .customBtn__fab:hover {
        background-color: #3b08aa !important;
        border: none !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
    }
      
    .customBtn__fab--small {
        width: 44.6153846154px !important;
        height: 44.6153846154px !important;
        padding: 23.0769230769px !important;
        font-size: 0.8rem !important;
    }
      
    .customBtn__fab--medium {
        width: 58px !important;
        height: 58px !important;
        padding: 30px !important;
        font-size: 1.1rem !important;
    }
      
    .customBtn__fab--large {
        width: 81.2px !important;
        height: 81.2px !important;
        padding: 42px !important;
        font-size: 1.3rem !important;
    }
    .customBtn__fab--large .btn-icon {
        font-size: 2rem;
    }`;

const sassCode = 
    `
    // first variables

    $btn-types: 'contained', 'outlined', 'text', 'fab';
    $btn-sizes: 'small', 'medium', 'large';
    $btn-padding-y: 10px;
    $btn-padding-x: 30px;
    $btn-padding-fab: 30px;
    $btn-width-fab: 58px;
    $btn-height-fab: 58px;
    $btn-text-small: .8rem;
    $btn-text-medium: 1.1rem;
    $btn-text-large: 1.3rem;

    // second mixins

    @mixin setSize($paddingY, $paddingX, $size) {
        padding: $paddingY $paddingX !important;
        font-size: $size !important;
    }
      
    @mixin setSizeText($size) {
        font-size: $size !important;
    }
      
    @mixin setSizeFab($widthFab, $heightFab, $paddingFab, $size) {
        width: $widthFab !important;
        height: $heightFab !important;
        padding: $paddingFab !important;
        font-size: $size !important;
    }
      
    @mixin setProps($background, $border, $textColor, $textDecoration) {
        background-color: $background !important; 
        border: $border !important;
        color: $textColor !important;
        text-decoration: $textDecoration !important;
    }
      
    @mixin buttonProps($buttonType) {
        @if $buttonType == 'contained' {
          @include setProps($primaryColor, none, $white-color, none);
          &:hover {
            @include setProps($primaryDarkColor, none, $white-color, none);
        }
          &:focus {
            @include setProps($primaryLightColor, none, $white-color, none);
        }
    } @else if $buttonType == 'outlined' {
          @include setProps(transparent, 1px solid $primaryColor, $primaryColor, none);
          &:hover {
            @include setProps($primaryColor, 1px solid $primaryColor, $white-color, none);
        }
          &:focus {
            @include setProps($btnOutlinedPressed, 1px solid $primaryColor, $primaryColor, none);
          }
        } @else if $buttonType == 'text' {
          @include setProps(transparent, none, $primaryTextColor, none);
          &:hover {
            @include setProps(transparent, none, $primaryDarkColor, underline);
        }
          &:focus {
            @include setProps(transparent, none, $primaryLightColor, none);
          }
    } @else if $buttonType == 'fab' {
          @extend %fabProps;
          @include getShadow();
          &:hover {
            @include setProps($primaryDarkColor, none, $white-color, none);
        }
    } @else {
          @include setProps($primaryColor, none, $white-color, none);
          &:hover {
            @include setProps($primaryDarkColor, none, $white-color, none);
        }
          &:focus {
            @include setProps($primaryLightColor, none, $white-color, none);
        }
          @error "Unknown type button #{$buttonType}.";
        }
    }
      
    @mixin buttonSize($buttonSize) {
        @if $buttonSize == 'small' {
            @include setSize($btn-padding-y / 2, $btn-padding-x / 2, $btn-text-small);
    } @else if $buttonSize == 'medium' {
            @include setSize($btn-padding-y, $btn-padding-x, $btn-text-medium);
    } @else if $buttonSize == 'large' {
           @include setSize($btn-padding-y * 1.2, $btn-padding-x * 1.4, $btn-text-large);
    } @else {
            @include setSize($btn-padding-y, $btn-padding-x, $btn-text-medium);
            @error "Unknown size button #{$buttonSize}.";
        }
    }
      
    @mixin buttonSizeText($buttonSize) {
        @if $buttonSize == 'small' {
            @include setSizeText($btn-text-small / 1);
        } @else if $buttonSize == 'medium' {
            @include setSizeText($btn-text-medium);
        } @else if $buttonSize == 'large' {
           @include setSizeText($btn-text-large * 1.3);
        } @else {
            @include setSize($btn-text-medium);
            @error "Unknown size button #{$buttonSize}.";
        }
    }
      
    @mixin buttonSizeFab($buttonSize) {
        @if $buttonSize == 'small' {
            @include setSizeFab(
              $btn-width-fab / 1.3, 
              $btn-height-fab / 1.3, 
              $btn-padding-fab / 1.3, 
              $btn-text-small);
        } @else if $buttonSize == 'medium' {
          @include setSizeFab(
            $btn-width-fab, 
            $btn-height-fab, 
            $btn-padding-fab, 
            $btn-text-medium);
           
        } @else if $buttonSize == 'large' {
          @include setSizeFab(
            $btn-width-fab * 1.4, 
            $btn-height-fab * 1.4, 
            $btn-padding-fab * 1.4, 
            $btn-text-large);
            .btn-icon {
              font-size: 2rem;
            }
        } @else {
          @include setSizeFab(
            $btn-width-fab, 
            $btn-height-fab, 
            $btn-padding-fab, 
            $btn-text-medium);
            @error "Unknown size button #{$buttonSize}.";
        }
    }

    // third implement all before

    @each $type in $btn-types {
        .customBtn__#{$type} {
            @include buttonProps($type);
        }
        @each $size in $btn-sizes {
            .customBtn__#{$type}--#{$size} {
                @if $type == 'text'  {
                    @include buttonSizeText($size);
                } @else if $type == 'fab' {
                    @include buttonSizeFab($size);
                } @else {
                    @include buttonSize($size);
                }
            }
        }
    }
    `;

const setCodes = () => {
   document.querySelector('.contained-code').innerHTML = containedCode;
   document.querySelector('.outlined-code').innerHTML = outlinedCode;
   document.querySelector('.text-code').innerHTML = textCode;
   document.querySelector('.fab-code').innerHTML = fabCode;
   document.querySelector('.sass-code').innerHTML = sassCode;
};

setCodes();


