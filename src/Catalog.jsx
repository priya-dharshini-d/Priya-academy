import React, { useState } from 'react';

const catalogData = [
  // Class 10 CBSE Math
  { id: 1, subject: 'Mathematics', classLevel: '10th', board: 'CBSE', title: 'Real Numbers', desc: 'Fundamental theorem of arithmetic and properties of real numbers.', weeks: '2 Weeks', level: 'Foundation' },
  { id: 2, subject: 'Mathematics', classLevel: '10th', board: 'CBSE', title: 'Polynomials', desc: 'Zeroes of a polynomial and relationship between zeroes and coefficients.', weeks: '3 Weeks', level: 'Mastery' },
  { id: 3, subject: 'Mathematics', classLevel: '10th', board: 'CBSE', title: 'Quadratic Equations', desc: 'Standard form and finding roots by factorization and quadratic formula.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 4, subject: 'Mathematics', classLevel: '10th', board: 'CBSE', title: 'Triangles', desc: 'Similar figures and theorems on similarity of triangles.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 5, subject: 'Mathematics', classLevel: '10th', board: 'CBSE', title: 'Trigonometry', desc: 'Trigonometric ratios and identities.', weeks: '4 Weeks', level: 'Mastery' },
  
  // Class 10 TN Board Math
  { id: 6, subject: 'Mathematics', classLevel: '10th', board: 'TN State Board', title: 'Relations and Functions', desc: 'Understanding ordered pairs, Cartesian product, and functions.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 7, subject: 'Mathematics', classLevel: '10th', board: 'TN State Board', title: 'Numbers and Sequences', desc: 'Euclid’s Division Lemma, Arithmetic and Geometric Progressions.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 8, subject: 'Mathematics', classLevel: '10th', board: 'TN State Board', title: 'Algebra', desc: 'Simultaneous linear equations, GCD, LCM, and rational expressions.', weeks: '4 Weeks', level: 'Mastery' },
  
  // Class 11 CBSE Math
  { id: 9, subject: 'Mathematics', classLevel: '11th', board: 'CBSE', title: 'Sets and Functions', desc: 'Sets, relations, functions, and trigonometric functions.', weeks: '4 Weeks', level: 'Foundation' },
  { id: 10, subject: 'Mathematics', classLevel: '11th', board: 'CBSE', title: 'Algebra', desc: 'Complex numbers, linear inequalities, permutations and combinations.', weeks: '5 Weeks', level: 'Mastery' },
  { id: 11, subject: 'Mathematics', classLevel: '11th', board: 'CBSE', title: 'Coordinate Geometry', desc: 'Straight lines and conic sections.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 12, subject: 'Mathematics', classLevel: '11th', board: 'CBSE', title: 'Calculus', desc: 'Limits and derivatives.', weeks: '3 Weeks', level: 'Foundation' },

  // Class 11 TN Board Math
  { id: 13, subject: 'Mathematics', classLevel: '11th', board: 'TN State Board', title: 'Sets, Relations and Functions', desc: 'Properties of sets, relations and types of functions.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 14, subject: 'Mathematics', classLevel: '11th', board: 'TN State Board', title: 'Basic Algebra', desc: 'Real number system, absolute value, linear inequalities.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 15, subject: 'Mathematics', classLevel: '11th', board: 'TN State Board', title: 'Trigonometry', desc: 'Radian measure, trigonometric equations, properties of triangles.', weeks: '5 Weeks', level: 'Mastery' },

  // Class 12 CBSE Math
  { id: 16, subject: 'Mathematics', classLevel: '12th', board: 'CBSE', title: 'Relations and Functions', desc: 'Types of relations, one-to-one and onto functions, composite functions.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 17, subject: 'Mathematics', classLevel: '12th', board: 'CBSE', title: 'Algebra', desc: 'Matrices and determinants, operations and applications.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 18, subject: 'Mathematics', classLevel: '12th', board: 'CBSE', title: 'Calculus', desc: 'Continuity, differentiation, applications, integrals, diff. equations.', weeks: '8 Weeks', level: 'Mastery' },
  { id: 19, subject: 'Mathematics', classLevel: '12th', board: 'CBSE', title: 'Vectors and 3D Geometry', desc: 'Vector algebra and three-dimensional geometry concepts.', weeks: '5 Weeks', level: 'Mastery' },

  // Class 12 TN Board Math
  { id: 20, subject: 'Mathematics', classLevel: '12th', board: 'TN State Board', title: 'Applications of Matrices and Determinants', desc: 'Inverse of a matrix, system of linear equations.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 21, subject: 'Mathematics', classLevel: '12th', board: 'TN State Board', title: 'Complex Numbers', desc: 'Rectangular and polar forms, De Moivre’s Theorem.', weeks: '3 Weeks', level: 'Mastery' },
  { id: 22, subject: 'Mathematics', classLevel: '12th', board: 'TN State Board', title: 'Theory of Equations', desc: 'Polynomial equations, roots and coefficients.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 23, subject: 'Mathematics', classLevel: '12th', board: 'TN State Board', title: 'Differential Calculus', desc: 'Applications of differential calculus.', weeks: '6 Weeks', level: 'Mastery' },

  // Class 11 CBSE Accountancy
  { id: 24, subject: 'Accountancy', classLevel: '11th', board: 'CBSE', title: 'Theoretical Framework', desc: 'Meaning, objectives, and basic accounting terms.', weeks: '3 Weeks', level: 'Foundation' },
  { id: 25, subject: 'Accountancy', classLevel: '11th', board: 'CBSE', title: 'Accounting Process', desc: 'Recording of transactions, ledger, and trial balance.', weeks: '5 Weeks', level: 'Mastery' },
  { id: 26, subject: 'Accountancy', classLevel: '11th', board: 'CBSE', title: 'Financial Statements', desc: 'Financial statements of sole proprietorship.', weeks: '4 Weeks', level: 'Mastery' },

  // Class 11 TN Board Accountancy
  { id: 27, subject: 'Accountancy', classLevel: '11th', board: 'TN State Board', title: 'Introduction to Accounting', desc: 'Need and meaning of accounting, double entry system.', weeks: '2 Weeks', level: 'Foundation' },
  { id: 28, subject: 'Accountancy', classLevel: '11th', board: 'TN State Board', title: 'Journal and Ledger', desc: 'Journalizing transactions and posting to ledger accounts.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 29, subject: 'Accountancy', classLevel: '11th', board: 'TN State Board', title: 'Trial Balance and Errors', desc: 'Preparation of trial balance and rectification of errors.', weeks: '3 Weeks', level: 'Mastery' },

  // Class 12 CBSE Accountancy
  { id: 30, subject: 'Accountancy', classLevel: '12th', board: 'CBSE', title: 'Accounting for Partnership Firms', desc: 'Fundamentals, goodwill, admission, and retirement of a partner.', weeks: '6 Weeks', level: 'Mastery' },
  { id: 31, subject: 'Accountancy', classLevel: '12th', board: 'CBSE', title: 'Accounting for Companies', desc: 'Issue of shares and debentures.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 32, subject: 'Accountancy', classLevel: '12th', board: 'CBSE', title: 'Analysis of Financial Statements', desc: 'Financial statement analysis and accounting ratios.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 33, subject: 'Accountancy', classLevel: '12th', board: 'CBSE', title: 'Cash Flow Statement', desc: 'Preparation and analysis of cash flow statement.', weeks: '3 Weeks', level: 'Foundation' },

  // Class 12 TN Board Accountancy
  { id: 34, subject: 'Accountancy', classLevel: '12th', board: 'TN State Board', title: 'Accounts from Incomplete Records', desc: 'Features, limitations, and preparation of final accounts.', weeks: '3 Weeks', level: 'Mastery' },
  { id: 35, subject: 'Accountancy', classLevel: '12th', board: 'TN State Board', title: 'Accounts of Not-for-Profit Organisation', desc: 'Receipts and payments account, income and expenditure.', weeks: '3 Weeks', level: 'Mastery' },
  { id: 36, subject: 'Accountancy', classLevel: '12th', board: 'TN State Board', title: 'Partnership Accounts', desc: 'Partnership deed, capital accounts, interest calculations.', weeks: '4 Weeks', level: 'Mastery' },
  { id: 37, subject: 'Accountancy', classLevel: '12th', board: 'TN State Board', title: 'Company Accounts', desc: 'Issue, forfeiture, and reissue of shares.', weeks: '4 Weeks', level: 'Mastery' },
];

const imgPlaceholders = {
  'Mathematics': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
  'Accountancy': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000'
};

export default function Catalog({ setView }) {
  const [filterSubject, setFilterSubject] = useState('Mathematics');
  const [filterClass, setFilterClass] = useState('12th');
  const [filterBoard, setFilterBoard] = useState('CBSE');

  const filteredData = catalogData.filter(item => 
    item.subject === filterSubject &&
    item.classLevel === filterClass &&
    item.board === filterBoard
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        
        {/* Header & Back Button */}
        <div className="mb-12">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-6">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Back to Home
          </button>
          <h1 className="font-sans font-black text-zinc-900 text-4xl mb-4">Complete Syllabus Catalog</h1>
          <p className="text-zinc-500 max-w-2xl">Browse our extensive, structured curriculum crafted specifically for board excellence and conceptual mastery.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-zinc-200 pb-8">
          {/* Subject Filter */}
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3">Subject</label>
            <div className="flex gap-2 bg-zinc-50 p-1 rounded-lg border border-zinc-200">
              {['Mathematics', 'Accountancy'].map(s => (
                <button 
                  key={s} 
                  onClick={() => {
                    setFilterSubject(s);
                    if (s === 'Accountancy' && filterClass === '10th') {
                      setFilterClass('11th');
                    }
                  }}
                  className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${filterSubject === s ? 'bg-white shadow-sm border border-zinc-200 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          
          {/* Class Filter */}
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3">Class Level</label>
            <div className="flex gap-2 bg-zinc-50 p-1 rounded-lg border border-zinc-200">
              {['10th', '11th', '12th'].map(c => (
                <button 
                  key={c} 
                  onClick={() => setFilterClass(c)}
                  className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${filterClass === c ? 'bg-white shadow-sm border border-zinc-200 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'} ${filterSubject === 'Accountancy' && c === '10th' ? 'opacity-30 cursor-not-allowed' : ''}`}
                  disabled={filterSubject === 'Accountancy' && c === '10th'}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Board Filter */}
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3">Educational Board</label>
            <div className="flex gap-2 bg-zinc-50 p-1 rounded-lg border border-zinc-200">
              {['CBSE', 'TN State Board'].map(b => (
                <button 
                  key={b} 
                  onClick={() => setFilterBoard(b)}
                  className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${filterBoard === b ? 'bg-white shadow-sm border border-zinc-200 text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredData.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-300 rounded-2xl">
            <p className="text-zinc-400 font-medium">No topics available for this combination.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredData.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-5 rounded-xl border border-zinc-100">
                  <img 
                    src={imgPlaceholders[item.subject]} 
                    alt={item.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="font-sans font-black text-zinc-900 text-lg leading-snug mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-sm">{item.weeks}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-zinc-300 text-zinc-600 rounded-sm">{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
