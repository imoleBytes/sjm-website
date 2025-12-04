## Color Palette

### Primary Colors

- **Dark Background**: `#0f1423` - Main page background
- **Secondary Dark**: `#0a0f1a` - Footer and alt sections
- **Card Background**: `#1a1f3a` - Feature and course cards
- **Card Hover**: `#1e293b` - Card hover state

### Accent Colors

- **Primary Blue**: `#3b82f6` - Main CTA and highlights
- **Blue Gradient Light**: `#2563eb` - Button gradient darker
- **Blue Accent Light**: `#60a5fa` - Secondary highlights
- **Blue Glow**: `rgba(59, 130, 246, 0.15)` - Glow effects

### Text Colors

- **Primary White**: `#ffffff` - Headlines and important text
- **Secondary White**: `#e5e7eb` - Body text
- **Tertiary Gray**: `#d1d5db` - Navigation links
- **Muted Gray**: `#b0b8cc` - Descriptions and secondary text

### Transparency Variants

- **Border**: `rgba(59, 130, 246, 0.1)` to `0.3` - Subtle borders
- **Background**: `rgba(30, 41, 59, 0.6)` - Card backgrounds with transparency
- **Overlay**: `rgba(0, 0, 0, 0.5)` - Modal overlays

---

## Typography

### Font Family

- **Primary Font**: `'Inter', sans-serif` - All body and heading text
- **Fallback**: System sans-serif stack

### Font Weights

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

### Heading Sizes

| Element            | Size          | Weight | Line Height | Letter Spacing |
| ------------------ | ------------- | ------ | ----------- | -------------- |
| h1 (Hero)          | 3.8rem (60px) | 700    | 1.15        | -0.01em        |
| h2 (Section Title) | 2.8rem (44px) | 700    | 1.2         | -0.01em        |
| h3 (Card Title)    | 1.35-1.4rem   | 700    | 1.3         | -0.01em        |
| h4 (Footer)        | 1rem          | 600    | 1.4         | normal         |

### Body Text Sizes

| Usage            | Size    | Weight | Line Height |
| ---------------- | ------- | ------ | ----------- |
| Hero Description | 1.1rem  | 400    | 1.8         |
| Section Subtitle | 1.05rem | 400    | 1.7         |
| Card Description | 0.95rem | 400    | 1.6         |
| Small Text       | 0.9rem  | 400    | 1.5         |
| Extra Small      | 0.85rem | 400    | 1.4         |

---

## Components

### Navigation Bar

Background: rgba(15, 20, 35, 0.8) /_ Transparent dark _/
Backdrop Filter: blur(12px)
Border Bottom: 1px solid rgba(59, 130, 246, 0.1)

Box Shadow: 0 10px 40px rgba(0, 0, 0, 0.3)

### Nav Links

text Color: #d1d5db (default)
Font Size: 0.95rem
Font Weight: 500

/_ Hover Underline Effect _/
{
Width: 0 → 100% on hover
Height: 2px
Background: #3b82f6
Transition: width 0.3s ease
}

### Buttons

**Primary Button**

Padding: 14px 36px
Border Radius: 8px
Font Weight: 600
Font Size: 0.95rem
Background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)
Color: white
Box Shadow: 0 8px 20px rgba(59, 130, 246, 0.3)

/_ Hover _/
Background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)
Transform: translateY(-2px)
Box Shadow: 0 12px 30px rgba(59, 130, 246, 0.4)

**Secondary Button**

Padding: 14px 36px
Border: 2px solid #3b82f6
Background: transparent
Color: #3b82f6

/_ Hover _/
Background: rgba(59, 130, 246, 0.1)
Border Color: #60a5fa
Color: #60a5fa

### Feature Cards

Background: rgba(30, 41, 59, 0.6)
Backdrop Filter: blur(10px)
Padding: 2.5rem
Border: 1px solid rgba(59, 130, 246, 0.2)
Border Radius: 12px
Transition: all 0.4s ease

/_ Hover _/
Transform: translateY(-10px)
Border Color: #3b82f6
Background: rgba(30, 41, 59, 0.8)
Box Shadow: 0 20px 50px rgba(59, 130, 246, 0.2)
